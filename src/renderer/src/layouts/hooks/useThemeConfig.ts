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
    themeConfig.value.themeColor.common[colorGroup + 'Hover'] = newVal
    themeConfig.value.themeColor.common[colorGroup + 'Pressed'] = newVal
  }

  let lastInfoColor = themeConfig.value.themeColor.common.infoColor

  // 监听主题颜色变化
  watch(
    () => [
      themeConfig.value.themeColor.common.primaryColor,
      themeConfig.value.themeColor.common.successColor,
      themeConfig.value.themeColor.common.warningColor,
      themeConfig.value.themeColor.common.errorColor
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
    () => themeConfig.value.themeColor.common.primaryColor,
    (newPrimaryVal) => {
      if (themeConfig.value.followPrimaryColor) {
        themeConfig.value.themeColor.common.infoColor = newPrimaryVal
        handleColorChange(newPrimaryVal, 'infoColor')
      }
    },
    {
      deep: true,
      immediate: true
    }
  )

  watch(
    () => themeConfig.value.themeColor.common.infoColor,
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
        themeConfig.value.themeColor.common.infoColor =
          themeConfig.value.themeColor.common.primaryColor
      } else {
        themeConfig.value.themeColor.common.infoColor = lastInfoColor
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

  watch(
    () => themeConfig.value.customTheme,
    (newVal) => {
      if (!newVal) {
        const layout = themeConfig.value.themeColor.layout
        Object.keys(layout).forEach((mode) => {
          Object.keys(layout[mode]).forEach((colorKey) => {
            layout[mode][colorKey] = ''
          })
        })
      }
    },
    {
      immediate: true // 立即执行一次 watch，以便在组件初始化时也检查条件
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
