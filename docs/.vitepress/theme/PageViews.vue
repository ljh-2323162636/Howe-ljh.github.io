<script setup>
import { useBusuanzi } from './useBusuanzi'

const { data, status, hint, reload } = useBusuanzi()
</script>

<template>
  <div class="page-views">
    <span>📖 本文总阅读量
      <template v-if="data">
        <span id="busuanzi_value_page_pv" class="pv-number">{{ data.page_pv }}</span> 次
      </template>
    </span>
    <span class="pv-status" role="status" aria-live="polite">{{ hint }}</span>
    <button v-if="status === 'failed' || status === 'offline'"
      class="pv-retry" type="button" @click="reload">重试</button>
  </div>
</template>

<style scoped>
.page-views {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px 8px;
  min-height: 64px;
  line-height: 1.8;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.pv-number {
  margin: 0 3px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  overflow-wrap: anywhere;
}

.pv-status {
  font-size: 0.75rem;
}

.pv-retry {
  min-width: 44px;
  min-height: 44px;
  padding: 8px 12px;
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
}

.pv-retry:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
</style>
