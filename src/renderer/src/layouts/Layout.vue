<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useMenu } from '@renderer/hooks/layout/menu'
import NHeader from '@renderer/layouts/NHeader.vue'

const isCollapsed = ref(false)

const { activeKey, menuOptions, handleMenuClick } = useMenu()
</script>
<template>
  <n-layout class="h-full">
    <NHeader />
    <n-layout position="absolute" class="top-9 bottom-0 select-none" has-sider>
      <n-layout-sider
        :native-scrollbar="false"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="200"
        :collapsed="isCollapsed"
        show-trigger="arrow-circle"
        @collapse="isCollapsed = true"
        @expand="isCollapsed = false"
      >
        <n-menu
          v-model:value="activeKey"
          :options="menuOptions"
          :collapsed="isCollapsed"
          :collapsed-width="64"
          :collapsed-icon-size="24"
          @update:value="handleMenuClick"
        />
      </n-layout-sider>
      <n-layout :native-scrollbar="false">
        <n-layout
          position="absolute"
          content-style="padding: 24px;"
          class="absolute top-0 bottom-16 select-text"
          :native-scrollbar="false"
        >
          <RouterView />
        </n-layout>
        <n-layout-footer position="absolute" class="h-9 p-1" bordered> 底部布局 </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-layout>
</template>
