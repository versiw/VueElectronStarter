import { themeConfig } from '@config/index'
import { ref, watch, watchEffect } from 'vue'

const temp = themeConfig
const initThemeConfig = JSON.parse(JSON.stringify(temp))
// const initThemeConfig = shallowRef(temp)
const defaultThemeConfig = JSON.parse(JSON.stringify(initThemeConfig))

export const useThemeConfig = () => {
  const themeConfig = ref<Renderer.Theme.ThemeConfig>(defaultThemeConfig)

  watchEffect(() => {
    // console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`)
    // console.log(`themeConfig changed to ${JSON.stringify(themeConfig.value)}`)
    // console.log(`temp changed to ${JSON.stringify(temp)}`)
    // console.log(`initThemeConfig changed to ${JSON.stringify(initThemeConfig)}`)
    // console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`)
  })

  const handleColorChange = (newVal, colorGroup) => {
    themeConfig.value.themeColor[colorGroup + 'Hover'] = newVal
    themeConfig.value.themeColor[colorGroup + 'Pressed'] = newVal
  }

  let lastInfoColor = themeConfig.value.themeColor.infoColor

  // 监听主题颜色变化
  watch(
    () => [
      themeConfig.value.themeColor.primaryColor,
      themeConfig.value.themeColor.successColor,
      themeConfig.value.themeColor.warningColor,
      themeConfig.value.themeColor.errorColor
    ],
    ([newPrimaryVal, newSuccessVal, newWarningVal, newErrorVal]) => {
      handleColorChange(newPrimaryVal, 'primaryColor')
      // handleColorChange(newInfoVal, 'infoColor')
      handleColorChange(newSuccessVal, 'successColor')
      handleColorChange(newWarningVal, 'warningColor')
      handleColorChange(newErrorVal, 'errorColor')
    },
    {
      deep: true,
      immediate: true
    }
  )

  watch(
    () => themeConfig.value.themeColor.primaryColor,
    (newPrimaryVal) => {
      if (themeConfig.value.followPrimaryColor) {
        themeConfig.value.themeColor.infoColor = newPrimaryVal
        handleColorChange(newPrimaryVal, 'infoColor')
      }
    },
    {
      deep: true,
      immediate: true
    }
  )

  watch(
    () => themeConfig.value.themeColor.infoColor,
    (newVal) => {
      if (!themeConfig.value.followPrimaryColor) {
        lastInfoColor = newVal
        console.log('lastInfoColor', lastInfoColor)
      }
      handleColorChange(newVal, 'infoColor')
    },
    {
      deep: true,
      immediate: true
    }
  )

  watch(
    () => themeConfig.value.followPrimaryColor,
    (newVal) => {
      if (newVal) {
        themeConfig.value.themeColor.infoColor = themeConfig.value.themeColor.primaryColor
      } else {
        themeConfig.value.themeColor.infoColor = lastInfoColor
      }
    },
    {
      deep: true,
      immediate: true
    }
  )

  const options2Object = {
    fade: {
      enter: 'animate__fadeInLeft',
      leave: 'animate__fadeOutRight'
    },
    zoom: {
      enter: 'animate__zoomIn',
      leave: 'animate__zoomOut'
    },
    slide: {
      enter: 'animate__slideInDown',
      leave: 'animate__slideOutDown'
    },
    bounce: {
      enter: 'animate__bounceIn',
      leave: 'animate__bounceOut'
    },
    flip: {
      enter: 'animate__flipInY',
      leave: 'animate__flipOutY'
    }
  }

  const options = [
    {
      label: '渐变',
      value: 'fade',
      disabled: false
    },
    {
      label: '缩放',
      value: 'zoom',
      disabled: false
    },
    {
      label: '滑动',
      value: 'slide',
      disabled: false
    },
    {
      label: '弹跳',
      value: 'bounce',
      disabled: false
    },
    {
      label: '翻转',
      value: 'flip',
      disabled: false
    }
  ]

  watch(
    () => themeConfig.value.animationScheme.type,
    (newVal) => {
      themeConfig.value.animationScheme.transition = options2Object[newVal]
    },
    {
      immediate: true
    }
  )

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

  return { themeConfig, options, copyThemeConfigToJSON, resetThemeConfig }
}
