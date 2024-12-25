<script setup lang="ts">
import { defineComponent } from 'vue'
import ElectronIcon24 from '@renderer/icons/ElectronIcon24.vue'
import { renderIcon } from '@renderer/utils/common'
import { useDrawer } from '@renderer/hooks/common/drawer'
import Theme from '@renderer/layouts/Theme.vue'

defineComponent({
  name: 'NHeader'
})

const { active, placement, activate } = useDrawer()
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
      <n-flex class="flex justify-end">
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
      </n-flex>
    </n-flex>
    <Theme v-model:active="active" :placement="placement" @update:active="active = $event" />
  </n-layout-header>
</template>
