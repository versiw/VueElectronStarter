<script setup lang="ts">
import Layout from '@renderer/layouts/Layout.vue'
import { darkTheme } from 'naive-ui'
import { computed } from 'vue'
import { useThemeConfig } from '@renderer/hooks/common/useThemeConfig'

const { themeConfig } = useThemeConfig()

const naiveDarkTheme = computed(() => (themeConfig.value.themeScheme === 'dark' ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="naiveDarkTheme" class="h-full">
    <n-message-provider> <Layout></Layout></n-message-provider>
  </n-config-provider>
</template>
