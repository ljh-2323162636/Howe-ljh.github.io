<script setup>
import { watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// 不蒜子脚本首次加载时会自动统计当前页 PV。
// 但 VitePress 是 SPA，客户端路由切换不会重新触发统计，
// 因此这里监听路由变化，手动调用 busuanzi.fetch() 刷新本页阅读量。
watch(
  () => route.path,
  () => {
    if (typeof window !== 'undefined' && window.busuanzi?.fetch) {
      window.busuanzi.fetch()
    }
  }
)
</script>

<template>
  <div class="page-views">
    <span id="busuanzi_container_page_pv">
      📖 本文总阅读量
      <span id="busuanzi_value_page_pv"></span>
      次
    </span>
  </div>
</template>

<style scoped>
.page-views {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

#busuanzi_value_page_pv {
  margin: 0 3px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
</style>
