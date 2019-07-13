import reducer from './intl-reducer'
// import {
//     CHANGE_LOCALE
// } from '../action/intl-action';

describe('intl reducer', () => {
  xit('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      locales: {
        lang: 'en',
        messages: {}
      }
    })
  })

  xit('should handle CHANGE_LOCALE', () => {
    expect(
      reducer(
        {
          locales: {
            lang: 'en',
            messages: {}
          }
        },
        {
          // type: CHANGE_LOCALE,
          data: 'de'
        }
      )
    ).toEqual({
      locales: {
        lang: 'de',
        messages: {}
      }
    })
  })
})
