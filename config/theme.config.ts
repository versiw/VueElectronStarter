const themeConfig: Web.Theme.ThemeConfig = {
  themeScheme: 'dark',
  layoutScheme: 'default',
  themeColor: {
    primaryColor: '#9462FF',
    infoColor: '#9462FF',
    successColor: '#53FFCE',
    warningColor: '#FFB953',
    errorColor: '#FF4F81',
    primaryColorHover: '#9462FF',
    primaryColorPressed: '#9462FF',
    successColorHover: '#53FFCE',
    successColorPressed: '#53FFCE',
    warningColorHover: '#FFB953',
    warningColorPressed: '#FFB953',
    errorColorHover: '#FF4F81',
    errorColorPressed: '#FF4F81',
    infoColorHover: '#9462FF',
    infoColorPressed: '#9462FF'
  },
  followPrimaryColor: true,
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
