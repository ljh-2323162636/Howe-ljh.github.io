import { computed, inject, nextTick, onMounted, onUnmounted, provide, ref, watch } from 'vue'

const ENDPOINT = 'https://counter.busuanzi.icodeq.com/'
const CACHE_PREFIX = 'howe:busuanzi:icodeq:v1:'
const CACHE_TTL = 24 * 60 * 60 * 1000
const CounterKey = Symbol('busuanzi')
let callbackSequence = 0

function parseCounts(payload) {
  const counts = {}
  for (const key of ['site_pv', 'page_pv']) {
    const value = payload?.[key]
    if (!/^\d+$/.test(String(value)) || !Number.isSafeInteger(Number(value))) return null
    counts[key] = Number(value)
  }
  return counts
}

function readCache(path) {
  try {
    const cached = JSON.parse(window.localStorage.getItem(CACHE_PREFIX + path))
    const age = Date.now() - cached?.savedAt
    if (age >= 0 && age < CACHE_TTL) return parseCounts(cached.counts)
  } catch {
    // 隐私模式、禁用存储或损坏的缓存不影响在线统计。
  }
  return null
}

function saveCache(path, counts) {
  try {
    window.localStorage.setItem(CACHE_PREFIX + path, JSON.stringify({ counts, savedAt: Date.now() }))
  } catch {
    // 存储失败时仍正常显示本次服务器返回的数据。
  }
}

// 本地随站点打包，只请求计数接口，不再依赖远程 JS 二次加载和全局 DOM 写入。
function requestCounts(timeout, success, failure) {
  const callback = `HoweBusuanzi_${Date.now()}_${++callbackSequence}`
  const script = document.createElement('script')
  let settled = false
  let timer

  const cleanup = () => {
    window.clearTimeout(timer)
    script.onload = null
    script.onerror = null
    script.remove()
    // 已取消的 JSONP 可能迟到，保留短期空回调，避免污染新页面或抛异常。
    window[callback] = () => {}
    window.setTimeout(() => { delete window[callback] }, 60000)
  }

  const fail = (reason) => {
    if (settled) return
    settled = true
    cleanup()
    failure(reason)
  }

  window[callback] = (payload) => {
    if (settled) return
    const counts = parseCounts(payload)
    if (!counts) return fail('invalid')
    settled = true
    cleanup()
    success(counts)
  }
  script.async = true
  script.src = `${ENDPOINT}?jsonpCallback=${callback}`
  // 与服务商脚本一致：接口依赖 Referer 的页面路径区分每篇文章。
  script.referrerPolicy = 'no-referrer-when-downgrade'
  script.onerror = () => fail('network')
  script.onload = () => { if (!settled) fail('invalid') }
  timer = window.setTimeout(() => fail('timeout'), timeout)
  document.head.appendChild(script)

  return () => {
    if (settled) return
    settled = true
    cleanup()
  }
}

export function createBusuanziCounter({ timeout = 12000, retryDelay = 1500 } = {}) {
  const data = ref(null)
  const status = ref('loading')
  const hint = computed(() => {
    if (status.value === 'ready') return ''
    const prefix = data.value ? '上次记录 · ' : ''
    if (status.value === 'offline') return prefix + '网络已断开'
    if (status.value === 'failed') return prefix + '暂时无法获取'
    return prefix + (data.value ? '更新中…' : '统计中…')
  })
  let path = ''
  let revision = 0
  let cancelRequest
  let retryTimer
  let requestedAt = 0
  let disposed = false

  const cleanup = () => {
    cancelRequest?.()
    cancelRequest = null
    window.clearTimeout(retryTimer)
    retryTimer = null
  }

  const request = (version, attempt = 0) => {
    if (disposed || version !== revision) return
    if (window.navigator.onLine === false) {
      status.value = 'offline'
      return
    }
    status.value = 'loading'
    requestedAt = Date.now()
    cancelRequest = requestCounts(timeout, (counts) => {
      if (disposed || version !== revision) return
      data.value = counts
      status.value = 'ready'
      saveCache(path, counts)
    }, (reason) => {
      if (disposed || version !== revision) return
      if (window.navigator.onLine === false) {
        status.value = 'offline'
      } else if (reason === 'network' && attempt === 0) {
        // 明确加载失败时仅自动重试一次，避免在弱网下不断请求。
        retryTimer = window.setTimeout(() => request(version, 1), retryDelay)
      } else {
        // 超时不等于未计数；接口没有幂等机制，不自动重发超时请求。
        status.value = 'failed'
      }
    })
  }

  const load = (nextPath) => {
    if (disposed || path === nextPath) return
    cleanup()
    revision += 1
    path = nextPath
    data.value = readCache(path)
    request(revision)
  }

  const reload = () => {
    if (disposed || !path || status.value === 'loading') return
    cleanup()
    revision += 1
    request(revision)
  }

  const offline = () => {
    if (disposed || status.value === 'ready') return
    revision += 1
    cleanup()
    status.value = 'offline'
  }

  const resume = () => {
    if (disposed || document.visibilityState === 'hidden' || window.navigator.onLine === false) return
    if (status.value === 'offline' || (status.value === 'failed' && Date.now() - requestedAt >= 30000)) {
      reload()
    }
  }

  const dispose = () => {
    disposed = true
    revision += 1
    cleanup()
  }

  return { data, status, hint, load, reload, offline, resume, dispose }
}

// Layout 内唯一的统计实例：首页、文章显示组件共享同一次请求。
export function provideBusuanzi(route) {
  const counter = createBusuanziCounter()
  let stopWatch
  let mounted = false
  let navigation = 0
  provide(CounterKey, counter)

  onMounted(() => {
    mounted = true
    stopWatch = watch(() => route.path, async () => {
      const current = ++navigation
      // 等待 VitePress 更新地址，确保 JSONP 的 Referer 是当前文章。
      await nextTick()
      if (!mounted || current !== navigation) return
      counter.load(window.location.origin + window.location.pathname)
    }, { immediate: true, flush: 'post' })
    window.addEventListener('offline', counter.offline)
    window.addEventListener('online', counter.resume)
    document.addEventListener('visibilitychange', counter.resume)
    window.addEventListener('pageshow', counter.resume)
  })

  onUnmounted(() => {
    mounted = false
    stopWatch?.()
    counter.dispose()
    window.removeEventListener('offline', counter.offline)
    window.removeEventListener('online', counter.resume)
    document.removeEventListener('visibilitychange', counter.resume)
    window.removeEventListener('pageshow', counter.resume)
  })
}

export function useBusuanzi() {
  return inject(CounterKey)
}
