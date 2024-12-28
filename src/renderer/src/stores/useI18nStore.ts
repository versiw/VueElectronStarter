import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setLocale } from '@renderer/locales'
export const useI18nStore = defineStore('I18nStore', () => {
  const locale = ref<Web.I18n.LangType>(
    (sessionStorage.getItem('localeLang') as Web.I18n.LangType) || 'zh-CN'
  )

  const localeOptions: Web.I18n.LangOption[] = [
    {
      label: '中文',
      key: 'zh-CN'
    },
    {
      label: 'English',
      key: 'en-US'
    }
  ]

  const handleSelectLang = (key: string) => {
    setLocale(key as Web.I18n.LangType)
    locale.value = key as Web.I18n.LangType
  }

  return {
    locale,
    localeOptions,
    handleSelectLang
  }
})
