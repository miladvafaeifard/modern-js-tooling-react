import IntlUtils from './intl-utils'

const intlConfig = {
  defaultLocale: 'en',
  locales: ['en']
}

const intlLangEN = {
  testData: 'test'
}

describe('Intl utils', () => {
  beforeEach(() => {
    jest.doMock('../../../.config/intl/en.json', () => intlLangEN)
  })

  describe('getAllMessages', () => {
    it('should return with all of the lang specific messages', () => {
      //ASSIGN

      const intlUtils = new IntlUtils(intlConfig)
      const expectedMessages = {
        en: {
          testData: 'test'
        }
      }

      //ACT
      const receivedMessages = intlUtils.getAllMessages()
      //ASSERT
      expect(expectedMessages).toEqual(receivedMessages)
    })
  })
  describe('getMessages', () => {
    it('should return with lang specific messages', () => {
      //ASSIGN

      const intlUtils = new IntlUtils(intlConfig)
      const expectedMessages = intlLangEN
      //ACT
      const receivedMessages = intlUtils.getMessages('en')
      //ASSERT
      expect(receivedMessages).toEqual(expectedMessages)
    })
    it('should return undefined if langId is not specified', () => {
      //ASSIGN

      const intlUtils = new IntlUtils(intlConfig)
      //ACT
      const receivedMessagesEmpty = intlUtils.getMessages()
      const receivedMessagesNull = intlUtils.getMessages(null)
      const receivedMessagesNaN = intlUtils.getMessages(NaN)

      //ASSERT
      expect(receivedMessagesEmpty).toEqual(undefined)
      expect(receivedMessagesNull).toEqual(undefined)
      expect(receivedMessagesNaN).toEqual(undefined)
    })
  })
  describe('getLocales', () => {
    it('should return with locales', () => {
      //ASSIGN
      const intlUtils = new IntlUtils(intlConfig)
      const expectedLocales = ['en']
      //ACT
      const receivedLocales = intlUtils.getLocales()
      //ASSERT
      expect(receivedLocales).toEqual(expectedLocales)
    })
  })
  describe('getDefaultLocale', () => {
    it('should return with default locale', () => {
      //ASSIGN
      const intlUtils = new IntlUtils(intlConfig)
      const expectedLocale = 'en'
      //ACT
      const receivedLocales = intlUtils.getDefaultLocale()
      //ASSERT
      expect(receivedLocales).toEqual(expectedLocale)
    })
  })
})
