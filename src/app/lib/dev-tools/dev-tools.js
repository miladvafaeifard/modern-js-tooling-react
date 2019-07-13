export default class DevTools {
  static getDevTools() {
    const windowObj = window
    const isDevWindow =
      typeof window === 'object' &&
      windowObj.hasOwnProperty('devToolsExtension')
    const dummyFnc = f => f

    return isDevWindow ? windowObj.devToolsExtension() : dummyFnc
  }
}
