<script setup lang="ts">
definePage({
  meta: {
    title: '首页',
    isHide: false,
    icon: 'HomeOutline',
    iconAlt: 'Home'
  }
})

import ElectronIcon24 from '@renderer/icons/ElectronIcon24.vue'
import { reactive } from 'vue'
const versions = reactive({ ...window.electron.process.versions })

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <n-flex vertical class="h-full w-full flex items-center justify-center">
    <n-icon size="140" class="flex items-center justify-center w-full">
      <ElectronIcon24 />
    </n-icon>
    <n-gradient-text
      class="text-5xl font-bold"
      :gradient="{
        from: 'rgb(66, 211, 146)',
        to: 'rgb(100, 126, 255)'
      }"
    >
      VueElectronStarter
    </n-gradient-text>
    <div>基于 electron-vite 的 Vue 3 桌面应用起始项目</div>
    <div>Vue3 + Naive UI + Pinia + TypeScript + Tailwind CSS</div>
    <div>请尝试按 <code>F12</code> 键或 <code>Ctrl+Shift+I</code> 打开开发工具</div>
    <n-button type="default" color="rgb(66, 211, 146)" ghost round @click="ipcHandle">
      Send IPC
    </n-button>
    <n-flex vertical class="flex items-center justify-around">
      <div class="flex items-center justify-between">Electron V {{ versions.electron }}</div>
      <div>Chromium V {{ versions.chrome }}</div>
      <div>Node V {{ versions.node }}</div>
    </n-flex>
  </n-flex>
</template>
