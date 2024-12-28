import iconMaps from '@renderer/icons/iconMaps'
import { NIcon } from 'naive-ui'
import { Component, computed, h } from 'vue'

// 渲染图标组件
// export const renderIcon = (icon: Component) => {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }

import { useThemeConfig } from '@renderer/hooks/layout/useThemeConfig'

const { themeConfig } = useThemeConfig()

export const renderIcon = (iconName: string) => {
  const component = computed(() => {
    return themeConfig.value.themeScheme === 'dark'
      ? iconMaps[iconName]
      : iconMaps[`${iconName}Outline`]
  })
  return () => h(NIcon, null, { default: () => h(component.value) })
}

export const renderIconMenu = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
