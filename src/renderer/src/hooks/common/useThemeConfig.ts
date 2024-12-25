import globalConfig from '@config/index'
import { ref, watchEffect } from 'vue'

export const useThemeConfig = () => {
  const { themeConfig: temp } = globalConfig

  const themeConfig = ref(temp)

  watchEffect(() => {
    console.log(`themeConfig changed to ${JSON.stringify(themeConfig.value)}`)
  })
  return { themeConfig }
}
