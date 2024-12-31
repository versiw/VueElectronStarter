<script setup lang="ts">
import Layout from '@renderer/layouts/Layout.vue'
import { darkTheme } from 'naive-ui'
import { computed } from 'vue'
import { useThemeConfig } from '@renderer/layouts/hooks/useThemeConfig'
import { NConfigProvider } from 'naive-ui'

const { themeConfig } = useThemeConfig()

const naiveDarkTheme = computed(() => (themeConfig.value.themeScheme === 'dark' ? darkTheme : null))

const themeOverrides = computed(() => {
  if (themeConfig.value.customTheme) {
    return {
      common: {
        ...themeConfig.value.themeColor.common
      },
      Layout: {
        ...(themeConfig.value.themeScheme === 'dark'
          ? themeConfig.value.themeColor.layout.dark
          : themeConfig.value.themeColor.layout.light)
      }
    }
  } else {
    return {
      common: {
        ...themeConfig.value.themeColor.common
      }
    }
  }
})
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :theme="naiveDarkTheme"
    class="w-full h-full"
  >
    <n-message-provider><Layout></Layout></n-message-provider>
    <!-- <n-global-style /> -->
  </n-config-provider>
</template>
