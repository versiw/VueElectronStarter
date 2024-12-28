export default interface ThemeConfig {
  // 主题模式
  themeScheme: string
  // 布局模式
  layoutScheme: string
  // 主题颜色
  themeColor: {
    // 主色
    primaryColor: string
    primaryColorHover?: string
    primaryColorPressed?: string
    // 信息色
    infoColor: string
    infoColorHover?: string
    infoColorPressed?: string
    // 成功色
    successColor: string
    successColorHover?: string
    successColorPressed?: string
    // 警告色
    warningColor: string
    warningColorHover?: string
    warningColorPressed?: string
    // 错误色
    errorColor: string
    errorColorHover?: string
    errorColorPressed?: string
  }
  // 是否跟随主色
  followPrimaryColor: boolean
  // 是否开启页面切换动画
  animation: boolean
  // 页面切换动画
  animationScheme: {
    // 动画类型
    type: string
    // 过渡特效
    transition: {
      // 进入特效
      enter: string
      // 离开特效
      leave: string
    }
  }
}
