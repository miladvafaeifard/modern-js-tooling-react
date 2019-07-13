import { compose } from 'redux'

export default class DevTools {
  /**
   * get dev tools extension of redux
   * @deprecated
   */
  static getDevTools() {
    const windowObj = window
    const isDevWindow =
      typeof window === 'object' &&
      windowObj.hasOwnProperty('devToolsExtension')
    const dummyFnc = f => f

    return isDevWindow ? windowObj.devToolsExtension() : dummyFnc
  }

  static composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
