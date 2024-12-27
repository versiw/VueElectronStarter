import ThemeConfig from './theme'

const themeConfig: ThemeConfig = {
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
    successColorHover: '#9462FF',
    successColorPressed: '#9462FF',
    warningColorHover: '#53FFCE',
    warningColorPressed: '#53FFCE',
    errorColorHover: '#FFB953',
    errorColorPressed: '#FFB953',
    infoColorHover: '#9462FF',
    infoColorPressed: '#9462FF'
  },
  followPrimaryColor: true,
  animation: true,
  animationScheme: {
    enter: 'animate__fadeInLeft',
    leave: 'animate__fadeOutRight'
  }
}

export default themeConfig
