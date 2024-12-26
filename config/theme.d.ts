export default interface ThemeConfig {
  // 主题模式
  themeScheme: string
  // 布局模式
  layoutBase: string
  // 主题颜色
  themeColor: {
    primaryColor: string
    primaryColorHover: string
    primaryColorPressed: string
  }
}
