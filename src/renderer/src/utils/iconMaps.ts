/* prettier-ignore */

// TODO:: 优化图标导入方式,方便按需导入、增强扩展性

/* 手动导入 icon */
// import { Home, HomeOutline, InformationCircle, InformationCircleOutline, Menu, MenuOutline } from '@vicons/ionicons5'

// const iconMaps: Record<string, Component> = {
//   Home: Home,
//   HomeOutline: HomeOutline,
//   MenuOutline: MenuOutline,
//   Menu: Menu,
//   InformationCircleOutline: InformationCircleOutline,
//   InformationCircle: InformationCircle
// }

/* 一次性完整导入并实现全部映射 */

import * as Icons from '@vicons/ionicons5'
import type { Component } from 'vue'

const iconMaps: Record<string, Component> = Object.keys(Icons).reduce((iconMap, iconName) => {
  if (Icons[iconName]) {
    iconMap[iconName] = Icons[iconName]
  }
  return iconMap
}, {})

export default iconMaps
