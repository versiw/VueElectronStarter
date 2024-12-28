import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './locale'

const i18n = createI18n({
  legacy: false, // 设置为 false，启用 composition API 模式
  locale: sessionStorage.getItem('localeLang') || 'zh-CN',
  fallbackLocale: 'en',
  messages
})

/**
 * Setup plugin i18n
 *
 * @param app
 */
export function setupI18n(app: App) {
  app.use(i18n)
}

export const $t = i18n.global.t as Web.I18n.$T

export function setLocale(locale: Web.I18n.LangType) {
  i18n.global.locale.value = locale
}
