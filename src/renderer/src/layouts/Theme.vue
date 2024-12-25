<script setup lang="ts">
import { ref, watch } from 'vue'
import { renderIcon } from '@renderer/utils/common'
import { useThemeConfig } from '@renderer/hooks/common/useThemeConfig'

const props = defineProps<{
  active: boolean
  placement: string
}>()

const drawerShow = ref(false)

watch(
  () => props.active,
  (newVal, oldVal) => {
    console.log(`active changed from ${oldVal} to ${newVal}`)
    drawerShow.value = newVal
  },
  {
    immediate: true
  }
)

const emit = defineEmits(['update:active'])

watch(
  () => drawerShow.value,
  (newVal, oldVal) => {
    console.log(`drawerShow changed from ${oldVal} to ${newVal}`)
    if (!newVal) {
      emit('update:active', false)
    }
  }
)

const { themeConfig } = useThemeConfig()
</script>

<template>
  <n-drawer
    v-model:show="drawerShow"
    :width="502"
    :placement="placement"
    :mask-closable="true"
    :close-on-esc="true"
  >
    <n-drawer-content title="主题配置">
      <n-flex vertical>
        <n-flex vertical class="w-full items-center justify-center">
          <n-divider> 主题模式 </n-divider>
          <n-tabs
            type="segment"
            animated
            class="w-1/3"
            :default-value="themeConfig.themeScheme"
            @update:value="(tabName: string) => (themeConfig.themeScheme = tabName)"
          >
            <n-tab-pane name="light" :tab="renderIcon('Sunny')"> </n-tab-pane>
            <n-tab-pane name="dark" :tab="renderIcon('Moon')"> </n-tab-pane>
          </n-tabs>
        </n-flex>
        <n-flex vertical>
          <n-divider> 布局模式 </n-divider>
        </n-flex>
      </n-flex>
    </n-drawer-content>
  </n-drawer>
</template>
