<script setup lang="ts">
import { useAppStore } from 'valaxy'
import { useSiteConfig } from 'valaxy'

const app = useAppStore()
const siteConfig = useSiteConfig()
</script>

<template>
  <nav class="yun-nav-menu flex items-center gap-1">
    <RouterLink to="/" class="yun-icon-btn" title="首页">
      <div i-ri-home-4-line />
    </RouterLink>

    <button
      class="yun-icon-btn"
      :title="app.isDark ? '切换亮色模式' : '切换暗色模式'"
      @click="app.toggleDark()"
    >
      <div i="ri-sun-line dark:ri-moon-line" />
    </button>

    <YunSearchTrigger v-if="siteConfig.search.enable" />
    <YunToggleLocale />
  </nav>
</template>
