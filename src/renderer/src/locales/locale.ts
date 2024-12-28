import zhCN from './langs/zh-cn'
import enUS from './langs/en-us'

const locales: Record<Web.I18n.LangType, Web.I18n.Schema> = {
  'zh-CN': zhCN,
  'en-US': enUS
}

export default locales
