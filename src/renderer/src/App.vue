<script setup lang="ts">
import Layout from '@renderer/layouts/Layout.vue'
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme" class="h-full">
    <Layout></Layout>
  </n-config-provider>
</template>
