import globalConfig from '@config/index'
import { ref, watchEffect } from 'vue'

export const useThemeConfig = () => {
  const { themeConfig: temp } = globalConfig

  const themeConfig = ref(temp)

  watchEffect(() => {
    console.log(`themeConfig changed to ${JSON.stringify(themeConfig.value)}`)
  })

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

  return { themeConfig, copyThemeConfigToJSON }
}
