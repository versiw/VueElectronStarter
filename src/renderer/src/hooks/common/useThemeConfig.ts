import globalConfig from '@config/index'
import ThemeConfig from '@config/theme'
import { ref, watchEffect } from 'vue'

const temp = globalConfig.themeConfig
const initThemeConfig = JSON.parse(JSON.stringify(temp))
const defaultThemeConfig = JSON.parse(JSON.stringify(initThemeConfig))

export const useThemeConfig = () => {
  const themeConfig = ref<ThemeConfig>(defaultThemeConfig)

  watchEffect(() => {
    console.log(`themeConfig changed to ${JSON.stringify(themeConfig.value)}`)
    console.log(`temp changed to ${JSON.stringify(temp)}`)
    console.log(`initThemeConfig changed to ${JSON.stringify(initThemeConfig)}`)
  })

  // watch(
  //   () => themeConfig.value,
  //   (newVal) => {
  //     console.log(`themeConfig changed to ${JSON.stringify(newVal)}`)
  //   },
  //   {
  //     deep: true
  //   }
  // )

  const copyThemeConfigToJSON = async () => {
    try {
      const jsonString = JSON.stringify(themeConfig.value, null, 2)
      await navigator.clipboard.writeText(jsonString)
      console.log('JSON已复制到剪贴板')
      window.$message?.success(`复制成功，请替换 config/theme.config.ts 中的变量 themeConfig`)
    } catch (error) {
      console.error('复制失败', error)
    }
  }

  const resetThemeConfig = () => {
    Object.assign(themeConfig.value, JSON.parse(JSON.stringify(initThemeConfig)))
    console.log('已重置主题配置')
  }

  return { themeConfig, copyThemeConfigToJSON, resetThemeConfig }
}
