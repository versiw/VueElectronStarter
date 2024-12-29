/**渲染层类型命名空间 */
declare namespace Renderer {
  /**全局配置类型命名空间 */
  namespace Global {
    interface RendererConfig {
      // 是否使用 unplugin-vue-router 基于文件系统的路由插件
      useUnpluginVueRouter: boolean
    }
  }

  /**主题配置类型命名空间 */
  namespace Theme {
    /**主题配置接口 */
    interface ThemeConfig {
      /**
       * 主题模式
       * @type {string}
       * @enum {string} 可能的值包括 'light' | 'dark' | 'system'
       */
      themeScheme: 'dark' | 'light'

      /**
       * 主题模式
       * @type {string}
       * @enum {string} 可能的值包括 'default' | 'no-footer'
       */
      layoutScheme: 'default' | 'no-footer'

      /**
       * 主题颜色
       *
       * 属性名同 Naive UI 的主题配置
       *
       * 详见 https://www.naiveui.com/zh-CN/light/docs/theme#use-theme-vars */
      themeColor: {
        common: {
          /**主色 */
          primaryColor: string
          primaryColorHover?: string
          primaryColorPressed?: string

          /**信息色 */
          infoColor: string
          infoColorHover?: string
          infoColorPressed?: string

          /**成功色 */
          successColor: string
          successColorHover?: string
          successColorPressed?: string

          /**警告色 */
          warningColor: string
          warningColorHover?: string
          warningColorPressed?: string

          /**错误色 */
          errorColor: string
          errorColorHover?: string
          errorColorPressed?: string
        }
        layout: {
          light: {
            color: string
            headerColor: string
            footerColor: string
            siderColor: string
          }
          dark: {
            color: string
            headerColor: string
            footerColor: string
            siderColor: string
          }
        }
      }

      /**
       * 是否跟随主色
       * @type {boolean}
       */
      followPrimaryColor: boolean

      /**
       * 是否自定义明暗
       * @type {boolean}
       */
      customTheme: boolean

      /**
       * 是否开启页面切换动画
       * @type {boolean}
       */
      animation: boolean
      /**页面切换动画 */
      animationScheme: {
        /**
         * 动画类型
         * @type {string}
         * @enum {string} 可能的值包括 'fade' | 'zoom' | 'slide' | 'bounce' | 'flip'
         */
        type: 'fade' | 'zoom' | 'slide' | 'bounce' | 'flip'
        /**
         * 过渡特效
         *
         * 详见 https://animate.style/
         */
        transition: {
          /**页面进入特效 */
          enter: string
          /**页面离开特效 */
          leave: string
        }
      }
    }
  }

  /** i18n 国际化配置类型命名空间 */
  namespace I18n {
    type LangType = 'en-US' | 'zh-CN'
    type LangOption = {
      label: string
      key: LangType
    }
    type Schema = {
      system: {
        title: string
        description: string
      }
    }
    interface $T {
      (key: I18nKey): string
      (key: I18nKey, plural: number, options?: TranslateOptions<LangType>): string
      (key: I18nKey, defaultMsg: string, options?: TranslateOptions<I18nKey>): string
      (key: I18nKey, list: unknown[], options?: TranslateOptions<I18nKey>): string
      (key: I18nKey, list: unknown[], plural: number): string
      (key: I18nKey, list: unknown[], defaultMsg: string): string
      (key: I18nKey, named: Record<string, unknown>, options?: TranslateOptions<LangType>): string
      (key: I18nKey, named: Record<string, unknown>, plural: number): string
      (key: I18nKey, named: Record<string, unknown>, defaultMsg: string): string
    }
  }
}
