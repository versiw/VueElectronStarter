<script setup lang="ts">
import { useMenu } from '@renderer/layouts/hooks/useMenu'

defineComponent({
  name: 'NSider'
})

const { isCollapsed, activeKey, menuOptions, handleMenuClick } = useMenu()
</script>

<template>
  <NLayoutSider
    v-model:collapsed="isCollapsed"
    :native-scrollbar="false"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="192"
    show-trigger="arrow-circle"
    class="h-full"
    @collapse="isCollapsed = true"
    @expand="isCollapsed = false"
  >
    <NMenu
      v-model:value="activeKey"
      :accordion="true"
      :options="menuOptions"
      :collapsed="isCollapsed"
      :collapsed-width="64"
      :collapsed-icon-size="24"
      :root-indent="16"
      :indent="12"
      @update:value="handleMenuClick"
    />
  </NLayoutSider>
</template>
