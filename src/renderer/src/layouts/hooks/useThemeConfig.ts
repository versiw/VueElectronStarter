import { generate } from '@ant-design/colors'
import { themeConfig } from '@config/index'
import { $t } from '@renderer/locales'
import { commonDark, commonLight } from 'naive-ui'
import { ref, watch, watchEffect } from 'vue'

const temp = themeConfig
const initThemeConfig = JSON.parse(JSON.stringify(temp))
// const initThemeConfig = shallowRef(temp)
const defaultThemeConfig = JSON.parse(JSON.stringify(initThemeConfig))

export const useThemeConfig = () => {
  const themeConfig = ref<Renderer.Theme.ThemeConfig>(defaultThemeConfig)

  let lastInfoColor = themeConfig.value.themeColor.common.infoColor

  const generateColors = ref<string[]>([])

  watchEffect(() => {
    // console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`)
    // console.log(`themeConfig changed to ${JSON.stringify(themeConfig.value)}`)
    // console.log(`temp changed to ${JSON.stringify(temp)}`)
    // console.log(`initThemeConfig changed to ${JSON.stringify(initThemeConfig)}`)
    // console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`)
  })

  const handleColorChange = (newVal: string, colorGroup: string) => {
    generateColors.value = generate(newVal, {
      theme: themeConfig.value.themeScheme === 'dark' ? 'dark' : 'default',
      backgroundColor:
        themeConfig.value.themeScheme === 'dark' ? commonDark.bodyColor : commonLight.bodyColor
    })
    themeConfig.value.themeColor.common[colorGroup + 'Hover'] = generateColors.value[4]
    themeConfig.value.themeColor.common[colorGroup + 'Suppl'] = generateColors.value[4]
    themeConfig.value.themeColor.common[colorGroup + 'Pressed'] = generateColors.value[6]
  }

  /**监听主题模式、主题颜色变化，根据ant design colors设置配色 */
  watch(
    () => [
      themeConfig.value.themeScheme,
      themeConfig.value.themeColor.common.primaryColor,
      themeConfig.value.themeColor.common.successColor,
      themeConfig.value.themeColor.common.warningColor,
      themeConfig.value.themeColor.common.errorColor
    ],
    ([, newPrimaryVal, newSuccessVal, newWarningVal, newErrorVal]) => {
      handleColorChange(newPrimaryVal, 'primaryColor')
      // handleColorChange(newInfoVal, 'infoColor')
      handleColorChange(newSuccessVal, 'successColor')
      handleColorChange(newWarningVal, 'warningColor')
      handleColorChange(newErrorVal, 'errorColor')
    },
    {
      immediate: true
    }
  )

  /**监听主题模式、主色修改，信息色跟随主色时，主色修改，同步修改信息色 */
  watch(
    () => [themeConfig.value.themeScheme, themeConfig.value.themeColor.common.primaryColor],
    ([, newPrimaryVal]) => {
      if (themeConfig.value.followPrimaryColor) {
        themeConfig.value.themeColor.common.infoColor = newPrimaryVal
        handleColorChange(newPrimaryVal, 'infoColor')
      }
    },
    {
      immediate: true
    }
  )

  /**监听主题模式、信息色变化，信息色不跟随主色时，记录最近设置的色值，并修改信息色 */
  watch(
    () => [themeConfig.value.themeScheme, themeConfig.value.themeColor.common.infoColor],
    ([, newVal]) => {
      if (!themeConfig.value.followPrimaryColor) {
        lastInfoColor = newVal
      }
      handleColorChange(newVal, 'infoColor')
    },
    {
      immediate: true
    }
  )

  /**监听信息色跟随主色按钮开关 */
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
            layout[mode][colorKey] = null
          })
        })
      }
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

  const options = computed(() => [
    {
      label: $t('theme.animationScheme.fade'),
      value: 'fade',
      disabled: false
    },
    {
      label: $t('theme.animationScheme.zoom'),
      value: 'zoom',
      disabled: false
    },
    {
      label: $t('theme.animationScheme.slide'),
      value: 'slide',
      disabled: false
    },
    {
      label: $t('theme.animationScheme.bounce'),
      value: 'bounce',
      disabled: false
    },
    {
      label: $t('theme.animationScheme.flip'),
      value: 'flip',
      disabled: false
    }
  ])

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
      const themeConfigCopy = JSON.parse(JSON.stringify(themeConfig.value))

      const filterObjectKeys = (obj, keysToKeep) => {
        return Object.keys(obj)
          .filter((key) => keysToKeep.includes(key))
          .reduce((result, key) => {
            result[key] = obj[key]
            return result
          }, {})
      }

      const commonKeysToKeep = [
        'primaryColor',
        'infoColor',
        'successColor',
        'warningColor',
        'errorColor'
      ]

      themeConfigCopy.themeColor.common = filterObjectKeys(
        themeConfigCopy.themeColor.common,
        commonKeysToKeep
      )

      const jsonString = JSON.stringify(themeConfigCopy, null, 2)
      await navigator.clipboard.writeText(jsonString)
      window.$message?.success(`${$t('theme.copyThemeConfigSuccessMsg')}`)
    } catch (error) {
      console.error('复制失败', error)
    }
  }

  const resetThemeConfig = () => {
    Object.assign(themeConfig.value, JSON.parse(JSON.stringify(initThemeConfig)))
  }

  return { themeConfig, options, copyThemeConfigToJSON, resetThemeConfig }
}
