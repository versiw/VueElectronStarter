<script setup lang="ts">
definePage({
  meta: {
    title: '首页',
    enUSTitle: 'Home',
    isHide: false,
    icon: 'HomeOutline',
    iconAction: 'Home'
  }
})

import VueElectronStarterLogo from '@renderer/icons/VueElectronStarterLogo.vue'
import { reactive } from 'vue'
const versions = reactive({ ...window.electron.process.versions })

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <n-flex vertical class="h-full w-full flex items-center justify-center">
    <n-icon size="145" class="flex items-center justify-center w-full h-full">
      <VueElectronStarterLogo />
    </n-icon>
    <n-gradient-text
      class="text-5xl font-bold"
      :gradient="{
        from: '#9462FF',
        to: '#53D386'
      }"
    >
      {{ $t('system.title') }}
    </n-gradient-text>
    <div>{{ $t('system.description') }}</div>
    <div>{{ $t('system.techStack') }}</div>
    <div>{{ $t('system.tip') }}</div>
    <n-button type="primary" ghost round @click="ipcHandle"> Send IPC </n-button>
    <n-flex vertical class="flex items-center justify-around">
      <div class="flex items-center justify-between">Electron V {{ versions.electron }}</div>
      <div>Chromium V {{ versions.chrome }}</div>
      <div>Node V {{ versions.node }}</div>
    </n-flex>
  </n-flex>
</template>
