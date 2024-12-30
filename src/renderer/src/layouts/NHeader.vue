<script setup lang="ts">
import { defineComponent, toRefs } from 'vue'
import VueElectronStarterLogo from '@renderer/icons/VueElectronStarterLogo.vue'
import { renderIcon } from '@renderer/utils/common'
import { useDrawer } from '@renderer/layouts/hooks/useDrawer'
import ThemeDrawer from '@renderer/layouts/ThemeDrawer.vue'
import { useThemeConfig } from '@renderer/layouts/hooks/useThemeConfig'
import { useI18nStore } from '@renderer/stores/useI18nStore'

defineComponent({
  name: 'NHeader'
})

const I18nStore = useI18nStore()
const { locale, localeOptions, handleSelectLang } = toRefs(I18nStore)
const { active, placement, activate } = useDrawer()
const { themeConfig } = useThemeConfig()
</script>
<template>
  <NLayoutHeader class="h-9 p-1" style="-webkit-app-region: drag; user-select: none" bordered>
    <!-- <n-layout-header class="h-9 p-1" bordered> -->
    <NFlex class="flex items-center justify-between h-7 w-5/6">
      <NFlex class="flex justify-start">
        <NIcon size="28">
          <VueElectronStarterLogo />
        </NIcon>
        <NGradientText
          class="text-lg font-bold"
          :gradient="{
            from: '#9462FF',
            to: '#58B37C'
          }"
        >
          VueElectronStarter
        </NGradientText>
      </NFlex>
      <NFlex class="flex flex-row-reverse justify-end">
        <NTooltip trigger="hover" placement="bottom-end">
          <template #trigger>
            <NButton
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
            </NButton>
          </template>
          主题配置
        </NTooltip>
        <NTooltip trigger="hover" placement="bottom-end">
          <template #trigger>
            <NButton
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
            </NButton>
          </template>
          主题模式
        </NTooltip>
        <NDropdown
          :value="locale"
          trigger="hover"
          :options="localeOptions"
          @select="handleSelectLang"
        >
          <NTooltip trigger="hover" placement="left">
            <template #trigger>
              <n-button
                text
                strong
                size="small"
                :focusable="false"
                :bordered="false"
                ghost
                :render-icon="renderIcon('Language')"
                style="-webkit-app-region: no-drag"
              >
              </n-button>

              <!-- <LangSwitch
              :lang="appStore.locale"
              :lang-options="appStore.localeOptions"
              @change-lang="appStore.changeLocale"
            /> -->
            </template>
            切换语言
          </NTooltip>
        </NDropdown>
      </NFlex>
    </NFlex>
    <ThemeDrawer v-model:active="active" :placement="placement" @update:active="active = $event" />
  </NLayoutHeader>
</template>
