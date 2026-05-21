<script setup lang="ts">
import { useAddonVercount } from 'valaxy-addon-vercount'

const { page, site } = useAddonVercount()
</script>

<template>
  <footer class="yun-footer">
    <div class="max-w-300 mx-auto px-4 py-8 text-center text-sm opacity-60 space-y-2">
      <VCLiveTime start-time="2026-05-21">
        <template #live-time-before>
          <span>博客已运行 </span>
        </template>
        <template #live-time-after>
          <span> 🎉</span>
        </template>
      </VCLiveTime>
      <div class="flex justify-center gap-4">
        <span>总访问量: {{ site.pv }}</span>
        <span>总访客: {{ site.uv }}</span>
        <span>当前在线: {{ page.online }}</span>
      </div>
      <div>
        Powered by <a href="https://valaxy.site" target="_blank" rel="noopener">Valaxy</a>
        &nbsp;|&nbsp; Theme <a href="https://github.com/YunYouJun/valaxy/blob/main/packages/valaxy-theme-yun/" target="_blank" rel="noopener">Yun</a>
      </div>
      <div>© 2026 醋栗</div>
    </div>
  </footer>
</template>

<style scoped>
.yun-footer {
  backdrop-filter: blur(8px);
  background: var(--va-c-bg);
  border-top: 1px solid var(--va-c-divider);
}
</style>
