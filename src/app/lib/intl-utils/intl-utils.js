import { addLocaleData } from 'react-intl'

export default class IntlUtils {
  messages = {}
  locales = []
  defaultLocale = ''

  constructor(intlConfig) {
    this.locales = intlConfig.locales
    this.defaultLocale = intlConfig.defaultLocale

    this.locales.forEach(locale => {
      addLocaleData(require(`react-intl/locale-data/${locale}`))
      this.messages[locale] = require(`../../../.config/intl/${locale}.json`)
    })
  }

  getAllMessages() {
    return this.messages
  }

  getMessages(locale) {
    return this.messages[locale]
  }

  getLocales() {
    return this.locales
  }

  getDefaultLocale() {
    return this.defaultLocale
  }
}
