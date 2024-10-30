<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useMenu } from '@renderer/hooks/layout/menu'

const isCollapsed = ref(false)

const { activeKey, menuOptions, handleMenuClick } = useMenu()
</script>
<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100vh">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        Vue Electron Starter
      </n-layout-header>
      <n-layout position="absolute" style="top: 64px; bottom: 0px" has-sider>
        <n-layout-sider
          :native-scrollbar="false"
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="220"
          :collapsed="isCollapsed"
          show-trigger
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
            style="top: 0px; bottom: 64px"
            :native-scrollbar="false"
          >
            <RouterView />
          </n-layout>
          <n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered>
            底部布局
          </n-layout-footer>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
