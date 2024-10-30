import { NIcon } from 'naive-ui'
import { Component, h } from 'vue'

// 渲染图标组件
export const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
