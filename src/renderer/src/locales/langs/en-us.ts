const local: Renderer.I18n.Schema = {
  system: {
    title: 'VueElectronStarter',
    description: 'Vue3 desktop application template based on electron-vite',
    techStack: 'Vue3 + Electron + Naive UI + Pinia + TypeScript + Tailwind CSS',
    tip: 'Try pressing F12 or Ctrl+Shift+I to open the developer tools.',
    tip2: "This is a template project, which means it has a lot of shortcomings, and I'll try to refine it as much as possible"
  },
  message: {
    info: 'Info',
    success: 'Success',
    warning: 'Warning'
  },
  theme: {
    drawerTitle: 'Theme Configuration',
    themeScheme: 'Theme Mode',
    switchLanguage: 'Switch Language',
    layoutScheme: 'Layout Mode',
    layoutMode: {
      default: 'Default Layout',
      noFooter: 'No Bottom Layout'
    },
    themeColor: 'Theme Colour',
    primaryColor: 'primary color',
    infoColor: 'info color',
    successColor: 'success color',
    warningColor: 'warning color',
    errorColor: 'error color',
    contentColor: 'content color',
    headerColor: 'header color',
    headerBorderColor: 'header bar border color',
    footerColor: 'footer color',
    footerBorderColor: 'footer bar border color',
    siderColor: 'sider color',
    siderBorderColor: 'sider bar border color',
    followPrimaryColor: 'follow the primary color',
    customTheme: 'Custom light and dark theme colours',
    currentThemeScheme: 'Current Theme Mode',
    pageFunction: 'Page Functions',
    animation: 'page switch animation',
    pageAnimationEffect: 'page switch animation effect',
    animationScheme: {
      fade: 'fade',
      zoom: 'zoom',
      slide: 'slide',
      bounce: 'bounce',
      flip: 'flip'
    },
    resetThemeConfig: 'Reset Configuration',
    copyThemeConfig: 'Copy Configuration',
    copyThemeConfigSuccessMsg:
      'Copy succeeded, please replace variable themeConfig in config/theme.config.ts'
  }
}

export default local
