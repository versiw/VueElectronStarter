<script setup lang="ts">
import { defineComponent } from 'vue'
import ElectronIcon24 from '@renderer/icons/ElectronIcon24.vue'
import { renderIcon } from '@renderer/utils/common'
import { useDrawer } from '@renderer/hooks/common/drawer'
import ThemeDrawer from '@renderer/layouts/ThemeDrawer.vue'
import { useThemeConfig } from '@renderer/hooks/common/useThemeConfig'

defineComponent({
  name: 'NHeader'
})

const { active, placement, activate } = useDrawer()
const { themeConfig } = useThemeConfig()
</script>
<template>
  <n-layout-header class="h-9 p-1" style="-webkit-app-region: drag; user-select: none" bordered>
    <!-- <n-layout-header class="h-9 p-1" bordered> -->
    <n-flex class="flex items-center justify-between h-7 w-5/6">
      <n-flex class="flex justify-start">
        <n-icon size="28">
          <ElectronIcon24 />
        </n-icon>
        <n-gradient-text
          class="text-lg font-bold"
          :gradient="{
            from: 'rgb(66, 211, 146)',
            to: 'rgb(100, 126, 255)'
          }"
        >
          VueElectronStarter
        </n-gradient-text>
      </n-flex>
      <n-flex class="flex flex-row-reverse justify-end">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button
              text
              strong
              size="small"
              :focusable="false"
              :bordered="false"
              ghost
              :render-icon="renderIcon('Layers')"
              style="-webkit-app-region: no-drag"
              @click="activate('right')"
            >
            </n-button>
          </template>
          主题配置
        </n-tooltip>
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button
              text
              strong
              size="small"
              :focusable="false"
              :bordered="false"
              ghost
              :render-icon="renderIcon(themeConfig.themeScheme === 'dark' ? 'Moon' : 'Sunny')"
              style="-webkit-app-region: no-drag"
              @click="
                themeConfig.themeScheme === 'dark'
                  ? (themeConfig.themeScheme = 'light')
                  : (themeConfig.themeScheme = 'dark')
              "
            >
            </n-button>
          </template>
          主题模式
        </n-tooltip>
      </n-flex>
    </n-flex>
    <ThemeDrawer v-model:active="active" :placement="placement" @update:active="active = $event" />
  </n-layout-header>
</template>
