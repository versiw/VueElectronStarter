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

const { themeConfig, copyThemeConfigToJSON, resetThemeConfig } = useThemeConfig()
</script>

<template>
  <n-drawer
    v-model:show="drawerShow"
    :width="400"
    :placement="placement"
    :mask-closable="true"
    :close-on-esc="true"
  >
    <n-drawer-content title="主题配置" :native-scrollbar="false">
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
          <n-grid x-gap="32" y-gap="24" :cols="2">
            <n-gi class="w-full">
              <n-layout
                class="p-2 bg-transparent border-2 rounded-lg border-transparent hover:border-blue-500 shadow dark:shadow-coolGray-5"
              >
                <n-layout-header
                  class="h-4 rounded-lg"
                  :style="{
                    backgroundColor: themeConfig.themeColor.primaryColor,
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
                    backgroundBlendMode: 'multiply'
                  }"
                ></n-layout-header>
                <n-layout has-sider class="bg-transparent">
                  <n-layout-sider
                    class="w-4 rounded-lg my-1 bg-opacity-50 bg-blend-multiply"
                    :style="{ backgroundColor: themeConfig.themeColor.primaryColor }"
                  ></n-layout-sider>
                  <n-layout class="bg-transparent">
                    <n-layout-content class="h-10 rounded-lg m-1 invert"> </n-layout-content>
                    <n-layout-footer
                      class="h-4 rounded-lg m-1"
                      :style="{ backgroundColor: themeConfig.themeColor.primaryColor }"
                    ></n-layout-footer>
                  </n-layout>
                </n-layout>
              </n-layout>
            </n-gi>
            <n-gi class="w-full">
              <n-layout
                class="p-2 bg-transparent border-2 rounded-lg border-transparent hover:border-blue-500 shadow dark:shadow-coolGray-5"
              >
                <n-layout-header class="h-4 rounded-lg"></n-layout-header>
                <n-layout has-sider class="bg-transparent">
                  <n-layout-sider class="w-4 rounded-lg my-1"></n-layout-sider>
                  <n-layout class="bg-transparent">
                    <n-layout-content class="h-10 rounded-lg m-1 invert"> </n-layout-content>
                    <n-layout-footer class="h-4 rounded-lg m-1"></n-layout-footer>
                  </n-layout>
                </n-layout>
              </n-layout>
            </n-gi>
          </n-grid>
        </n-flex>
        <n-flex vertical>
          <n-divider> 主题颜色 </n-divider>
          <n-flex class="justify-between">
            <div>主色</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.primaryColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
        </n-flex>
      </n-flex>
      <template #footer>
        <n-flex class="w-full justify-between">
          <n-button type="error" ghost @click="resetThemeConfig"> 重置配置 </n-button>
          <n-button type="primary" @click="copyThemeConfigToJSON"> 复制配置 </n-button>
        </n-flex>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped></style>
