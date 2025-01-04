const themeConfig: Renderer.Theme.ThemeConfig = {
  themeScheme: 'light',
  layoutScheme: 'default',
  themeColor: {
    common: {
      primaryColor: '#9462FF',
      infoColor: '#9462FF',
      successColor: '#58B37C',
      warningColor: '#F0A020',
      errorColor: '#DE283B'
    },
    layout: {
      light: {
        color: '#E5E5E5',
        headerColor: '#B3B3B3',
        headerBorderColor: '',
        footerColor: '#E5E5E5',
        footerBorderColor: '#B3B3B3',
        siderColor: '#E5E5E5',
        siderBorderColor: '#B3B3B3'
      },
      dark: {
        color: '#1E1E1E',
        headerColor: '#454545',
        headerBorderColor: '',
        footerColor: '#1E1E1E',
        footerBorderColor: '#454545',
        siderColor: '#1E1E1E',
        siderBorderColor: '#454545'
      }
    }
  },
  followPrimaryColor: true,
  customTheme: true,
  animation: true,
  animationScheme: {
    type: 'fade',
    transition: {
      enter: 'animate__fadeInLeft',
      leave: 'animate__fadeOutRight'
    }
  }
}
export default themeConfig
