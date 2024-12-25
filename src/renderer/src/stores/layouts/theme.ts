import { defineStore } from 'pinia'

import globalConfig from '@config/index'
import { watchEffect } from 'vue'

export const useThemeConfigStore = defineStore('themeConfig', () => {
  console.log('globalConfig', globalConfig)
  const { themeConfig } = globalConfig
  const syncFun = () => {
    // ...
  }

  watchEffect(() => {
    console.log(`themeConfig changed to ${JSON.stringify(themeConfig)}`)
  })

  return {
    // 响应式属性
    themeConfig,
    // 函数
    syncFun
  }
})
