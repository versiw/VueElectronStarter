const local: Renderer.I18n.Schema = {
  system: {
    title: 'VueElectronStarter',
    description: '基于 electron-vite 的 Vue3 桌面应用模板',
    techStack: 'Vue3 + Electron + Naive UI + Pinia + TypeScript + Tailwind CSS',
    tip: '请尝试按 F12 键或 Ctrl+Shift+I 打开开发工具',
    tip2: '这是一个模板项目，意味着它有很多不足，我会尽可能尝试完善它'
  },
  message: {
    info: '信息',
    success: '成功',
    warning: '警告'
  },
  theme: {
    drawerTitle: '主题配置',
    themeScheme: '主题模式',
    switchLanguage: '切换语言',
    layoutScheme: '布局模式',
    layoutMode: {
      default: '默认布局',
      noFooter: '无底部布局'
    },
    themeColor: '主题颜色',
    primaryColor: '主色',
    infoColor: '信息色',
    successColor: '成功色',
    warningColor: '警告色',
    errorColor: '错误色',
    contentColor: '内容区',
    headerColor: '标题栏',
    headerBorderColor: '标题栏边框',
    footerColor: '底部区',
    footerBorderColor: '底部区边框',
    siderColor: '侧边栏',
    siderBorderColor: '侧边栏边框',
    followPrimaryColor: '跟随主色',
    customTheme: '自定义明暗主题色',
    currentThemeScheme: '当前主题模式',
    pageFunction: '页面功能',
    animation: '页面切换动画',
    pageAnimationEffect: '页面切换动画效果',
    animationScheme: {
      fade: '渐变',
      zoom: '缩放',
      slide: '滑动',
      bounce: '弹跳',
      flip: '翻转'
    },
    resetThemeConfig: '重置配置',
    copyThemeConfig: '复制配置',
    copyThemeConfigSuccessMsg: '复制成功，请替换 config/theme.config.ts 中的变量 themeConfig'
  }
}

export default local
