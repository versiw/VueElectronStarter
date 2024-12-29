import zhCN from './langs/zh-cn'
import enUS from './langs/en-us'

const locales: Record<Renderer.I18n.LangType, Renderer.I18n.Schema> = {
  'zh-CN': zhCN,
  'en-US': enUS
}

export default locales
