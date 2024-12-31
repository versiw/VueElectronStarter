<script setup lang="ts">
import type { DrawerPlacement } from 'naive-ui'
import { ref, watch } from 'vue'
import { renderIcon } from '@renderer/utils/common'
import { useThemeConfig } from '@renderer/layouts/hooks/useThemeConfig'

const props = defineProps<{
  active: boolean
  placement: DrawerPlacement
}>()

const drawerShow = ref(false)

watch(
  () => props.active,
  (newVal) => {
    drawerShow.value = newVal
  },
  {
    immediate: true
  }
)

const emit = defineEmits(['update:active'])

watch(
  () => drawerShow.value,
  (newVal) => {
    if (!newVal) {
      emit('update:active', false)
    }
  }
)

const contentColor = computed({
  get: () => {
    return themeConfig.value.themeScheme === 'dark'
      ? themeConfig.value.themeColor.layout.dark.color
      : themeConfig.value.themeColor.layout.light.color
  },
  set: (newValue) => {
    if (themeConfig.value.themeScheme === 'dark') {
      themeConfig.value.themeColor.layout.dark.color = newValue
    } else {
      themeConfig.value.themeColor.layout.light.color = newValue
    }
  }
})

const headerColor = computed({
  get: () => {
    return themeConfig.value.themeScheme === 'dark'
      ? themeConfig.value.themeColor.layout.dark.headerColor
      : themeConfig.value.themeColor.layout.light.headerColor
  },
  set: (newValue) => {
    if (themeConfig.value.themeScheme === 'dark') {
      themeConfig.value.themeColor.layout.dark.headerColor = newValue
    } else {
      themeConfig.value.themeColor.layout.light.headerColor = newValue
    }
  }
})

const headerBorderColor = computed({
  get: () => {
    return themeConfig.value.themeScheme === 'dark'
      ? themeConfig.value.themeColor.layout.dark.headerBorderColor
      : themeConfig.value.themeColor.layout.light.headerBorderColor
  },
  set: (newValue) => {
    if (themeConfig.value.themeScheme === 'dark') {
      themeConfig.value.themeColor.layout.dark.headerBorderColor = newValue
    } else {
      themeConfig.value.themeColor.layout.light.headerBorderColor = newValue
    }
  }
})

const siderColor = computed({
  get: () => {
    return themeConfig.value.themeScheme === 'dark'
      ? themeConfig.value.themeColor.layout.dark.siderColor
      : themeConfig.value.themeColor.layout.light.siderColor
  },
  set: (newValue) => {
    if (themeConfig.value.themeScheme === 'dark') {
      themeConfig.value.themeColor.layout.dark.siderColor = newValue
    } else {
      themeConfig.value.themeColor.layout.light.siderColor = newValue
    }
  }
})

const siderBorderColor = computed({
  get: () => {
    return themeConfig.value.themeScheme === 'dark'
      ? themeConfig.value.themeColor.layout.dark.siderBorderColor
      : themeConfig.value.themeColor.layout.light.siderBorderColor
  },
  set: (newValue) => {
    if (themeConfig.value.themeScheme === 'dark') {
      themeConfig.value.themeColor.layout.dark.siderBorderColor = newValue
    } else {
      themeConfig.value.themeColor.layout.light.siderBorderColor = newValue
    }
  }
})

const footerColor = computed({
  get: () => {
    return themeConfig.value.themeScheme === 'dark'
      ? themeConfig.value.themeColor.layout.dark.footerColor
      : themeConfig.value.themeColor.layout.light.footerColor
  },
  set: (newValue) => {
    if (themeConfig.value.themeScheme === 'dark') {
      themeConfig.value.themeColor.layout.dark.footerColor = newValue
    } else {
      themeConfig.value.themeColor.layout.light.footerColor = newValue
    }
  }
})

const footerBorderColor = computed({
  get: () => {
    return themeConfig.value.themeScheme === 'dark'
      ? themeConfig.value.themeColor.layout.dark.footerBorderColor
      : themeConfig.value.themeColor.layout.light.footerBorderColor
  },
  set: (newValue) => {
    if (themeConfig.value.themeScheme === 'dark') {
      themeConfig.value.themeColor.layout.dark.footerBorderColor = newValue
    } else {
      themeConfig.value.themeColor.layout.light.footerBorderColor = newValue
    }
  }
})

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
    <n-drawer-content :title="$t('theme.drawerTitle')" :native-scrollbar="false">
      <n-flex vertical>
        <n-flex vertical class="w-full items-center justify-center">
          <n-divider> {{ $t('theme.themeScheme') }} </n-divider>
          <n-tabs
            v-model:value="themeConfig.themeScheme"
            type="segment"
            animated
            class="w-1/3"
            @update:value="(tabName: 'light' | 'dark') => (themeConfig.themeScheme = tabName)"
          >
            <n-tab-pane name="light" :tab="renderIcon('Sunny')"> </n-tab-pane>
            <n-tab-pane name="dark" :tab="renderIcon('Moon')"> </n-tab-pane>
          </n-tabs>
        </n-flex>
        <n-flex vertical>
          <n-divider> {{ $t('theme.layoutScheme') }} </n-divider>
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
                      backgroundColor: themeConfig.themeColor.common.primaryColor
                    }"
                  ></n-layout-header>
                  <n-layout has-sider class="bg-transparent">
                    <n-layout-sider
                      class="layout-sider w-4 rounded-md mt-1 mr-1 bg-opacity-50 bg-blend-multiply"
                      :style="{
                        backgroundColor: themeConfig.themeColor.common.primaryColor
                      }"
                    ></n-layout-sider>
                    <n-layout class="bg-transparent">
                      <n-layout-content
                        class="layout-content h-10 rounded-md mt-1"
                        :style="{
                          backgroundColor: themeConfig.themeColor.common.primaryColor
                        }"
                      >
                      </n-layout-content>
                      <n-layout-footer
                        class="layout-footer h-4 rounded-md mt-1"
                        :style="{
                          backgroundColor: themeConfig.themeColor.common.primaryColor
                        }"
                      ></n-layout-footer>
                    </n-layout>
                  </n-layout>
                </n-layout>
              </template>
              {{ $t('theme.layoutMode.default') }}
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
                      backgroundColor: themeConfig.themeColor.common.primaryColor
                    }"
                  ></n-layout-header>
                  <n-layout has-sider class="bg-transparent">
                    <n-layout-sider
                      class="layout-sider w-4 h-14 rounded-md mt-1 mr-1 bg-opacity-50 bg-blend-multiply"
                      :style="{
                        backgroundColor: themeConfig.themeColor.common.primaryColor
                      }"
                    ></n-layout-sider>
                    <n-layout class="bg-transparent">
                      <n-layout-content
                        class="layout-content h-14 rounded-md mt-1"
                        :style="{
                          backgroundColor: themeConfig.themeColor.common.primaryColor
                        }"
                      >
                      </n-layout-content>
                    </n-layout>
                  </n-layout>
                </n-layout>
              </template>
              {{ $t('theme.layoutMode.noFooter') }}
            </n-tooltip>
          </n-flex>
        </n-flex>
        <n-flex vertical>
          <n-divider> {{ $t('theme.themeColor') }} </n-divider>
          <n-flex class="justify-between">
            <div>{{ $t('theme.primaryColor') }}</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.common.primaryColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-flex class="justify-between">
            <div>
              <n-space
                ><div>{{ $t('theme.infoColor') }}</div>
                <n-switch v-model:value="themeConfig.followPrimaryColor" />
              </n-space>
            </div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.common.infoColor"
              :disabled="themeConfig.followPrimaryColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-flex class="justify-between">
            <div>{{ $t('theme.successColor') }}</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.common.successColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-flex class="justify-between">
            <div>{{ $t('theme.warningColor') }}</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.common.warningColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-flex class="justify-between">
            <div>{{ $t('theme.errorColor') }}</div>
            <n-color-picker
              v-model:value="themeConfig.themeColor.common.errorColor"
              class="w-24"
              :modes="['hex', 'rgb', 'hsl']"
              show-preview
              :show-alpha="false"
            />
          </n-flex>
          <n-divider>
            <n-flex class="justify-center">
              <div>
                <n-space
                  ><div>{{ $t('theme.customTheme') }}</div>
                </n-space>
              </div>
              <n-switch v-model:value="themeConfig.customTheme" />
            </n-flex>
          </n-divider>
          <n-flex v-if="themeConfig.customTheme" vertical>
            <n-flex class="justify-center">
              <n-space class="flex items-center">{{ $t('theme.currentThemeScheme') }}：</n-space>
              <n-space
                ><n-button
                  ghost
                  size="small"
                  :render-icon="renderIcon(themeConfig.themeScheme === 'dark' ? 'Moon' : 'Sunny')"
                  @click="
                    themeConfig.themeScheme === 'dark'
                      ? (themeConfig.themeScheme = 'light')
                      : (themeConfig.themeScheme = 'dark')
                  "
                >
                </n-button
              ></n-space>
            </n-flex>
            <n-flex class="justify-between">
              <div>{{ $t('theme.contentColor') }}</div>
              <n-color-picker
                v-model:value="contentColor"
                class="w-24"
                :modes="['hex', 'rgb', 'hsl']"
                show-preview
                :show-alpha="false"
              />
            </n-flex>
            <n-flex class="justify-between">
              <div>{{ $t('theme.headerColor') }}</div>
              <n-color-picker
                v-model:value="headerColor"
                class="w-24"
                :modes="['hex', 'rgb', 'hsl']"
                show-preview
                :show-alpha="false"
              />
            </n-flex>
            <n-flex class="justify-between">
              <div>{{ $t('theme.headerBorderColor') }}</div>
              <n-color-picker
                v-model:value="headerBorderColor"
                class="w-24"
                :modes="['hex', 'rgb', 'hsl']"
                show-preview
                :show-alpha="false"
              />
            </n-flex>
            <n-flex class="justify-between">
              <div>{{ $t('theme.siderColor') }}</div>
              <n-color-picker
                v-model:value="siderColor"
                class="w-24"
                :modes="['hex', 'rgb', 'hsl']"
                show-preview
                :show-alpha="false"
              />
            </n-flex>
            <n-flex class="justify-between">
              <div>{{ $t('theme.siderBorderColor') }}</div>
              <n-color-picker
                v-model:value="siderBorderColor"
                class="w-24"
                :modes="['hex', 'rgb', 'hsl']"
                show-preview
                :show-alpha="false"
              />
            </n-flex>
            <n-flex class="justify-between">
              <div>{{ $t('theme.footerColor') }}</div>
              <n-color-picker
                v-model:value="footerColor"
                class="w-24"
                :modes="['hex', 'rgb', 'hsl']"
                show-preview
                :show-alpha="false"
              />
            </n-flex>
            <n-flex class="justify-between">
              <div>{{ $t('theme.footerBorderColor') }}</div>
              <n-color-picker
                v-model:value="footerBorderColor"
                class="w-24"
                :modes="['hex', 'rgb', 'hsl']"
                show-preview
                :show-alpha="false"
              />
            </n-flex>
          </n-flex>
        </n-flex>
        <n-flex vertical>
          <n-divider> {{ $t('theme.pageFunction') }} </n-divider>
          <n-flex class="justify-between">
            <div>{{ $t('theme.animation') }}</div>
            <n-switch v-model:value="themeConfig.animation" />
          </n-flex>
          <div v-if="themeConfig.animation">
            <n-flex class="justify-between">
              <div>{{ $t('theme.pageAnimationEffect') }}</div>
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
          <n-button type="error" ghost @click="resetThemeConfig">
            {{ $t('theme.resetThemeConfig') }}
          </n-button>
          <n-button type="primary" @click="copyThemeConfigToJSON">
            {{ $t('theme.copyThemeConfig') }}
          </n-button>
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
