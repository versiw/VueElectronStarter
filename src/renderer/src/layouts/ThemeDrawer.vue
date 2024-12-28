<script setup lang="ts">
import { ref, watch } from 'vue'
import { renderIcon } from '@renderer/utils/common'
import { useThemeConfig } from '@renderer/hooks/layout/useThemeConfig'

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

const { themeConfig, options, copyThemeConfigToJSON, resetThemeConfig } = useThemeConfig()
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
          <n-flex>
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-layout
                  class="p-2 hover:cursor-pointer bg-transparent border-2 rounded-md border-transparent hover:border-blue-500 shadow-xl dark:shadow-coolGray-5"
                  @click="themeConfig.layoutScheme = 'default'"
                >
                  <n-layout-header
                    class="layout-header h-4 rounded-md"
                    :style="{
                      backgroundColor: themeConfig.themeColor.primaryColor
                    }"
                  ></n-layout-header>
                  <n-layout has-sider class="bg-transparent">
                    <n-layout-sider
                      class="layout-sider w-4 rounded-md mt-1 mr-1 bg-opacity-50 bg-blend-multiply"
                      :style="{
                        backgroundColor: themeConfig.themeColor.primaryColor
                      }"
                    ></n-layout-sider>
                    <n-layout class="bg-transparent">
                      <n-layout-content
                        class="layout-content h-10 rounded-md mt-1"
                        :style="{
                          backgroundColor: themeConfig.themeColor.primaryColor
                        }"
                      >
                      </n-layout-content>
                      <n-layout-footer
                        class="layout-footer h-4 rounded-md mt-1"
                        :style="{
                          backgroundColor: themeConfig.themeColor.primaryColor
                        }"
                      ></n-layout-footer>
                    </n-layout>
                  </n-layout>
                </n-layout>
              </template>
              默认布局
            </n-tooltip>
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-layout
                  class="p-2 hover:cursor-pointer bg-transparent border-2 rounded-md border-transparent hover:border-blue-500 shadow-xl dark:shadow-coolGray-5"
                  @click="themeConfig.layoutScheme = 'no-footer'"
                >
                  <n-layout-header
                    class="layout-header h-4 rounded-md"
                    :style="{
                      backgroundColor: themeConfig.themeColor.primaryColor
                    }"
                  ></n-layout-header>
                  <n-layout has-sider class="bg-transparent">
                    <n-layout-sider
                      class="layout-sider w-4 h-14 rounded-md mt-1 mr-1 bg-opacity-50 bg-blend-multiply"
                      :style="{
                        backgroundColor: themeConfig.themeColor.primaryColor
                      }"
                    ></n-layout-sider>
                    <n-layout class="bg-transparent">
                      <n-layout-content
                        class="layout-content h-14 rounded-md mt-1"
                        :style="{
                          backgroundColor: themeConfig.themeColor.primaryColor
                        }"
                      >
                      </n-layout-content>
                    </n-layout>
                  </n-layout>
                </n-layout>
              </template>
              无底部布局
            </n-tooltip>
          </n-flex>
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
          <n-flex class="justify-between">
            <div>
              <n-space
                ><div>信息色</div>
                <n-switch v-model:value="themeConfig.followPrimaryColor" />
              </n-space>
            </div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.infoColor"
              :disabled="themeConfig.followPrimaryColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-flex class="justify-between">
            <div>成功色</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.successColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-flex class="justify-between">
            <div>警告色</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.warningColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-flex class="justify-between">
            <div>错误色</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.errorColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
        </n-flex>
        <n-flex vertical>
          <n-divider> 页面功能 </n-divider>
          <n-flex class="justify-between">
            <div>页面切换动画</div>
            <n-switch v-model:value="themeConfig.animation" />
          </n-flex>
          <div v-if="themeConfig.animation">
            <n-flex class="justify-between">
              <div>页面切换动画效果</div>
              <n-select
                v-model:value="themeConfig.animationScheme.type"
                class="w-32"
                :options="options"
              />
            </n-flex>
          </div>
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

<style scoped>
.layout-header,
.layout-sider,
.layout-footer {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: multiply;
}

.layout-content {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  background-blend-mode: multiply;
}
</style>
