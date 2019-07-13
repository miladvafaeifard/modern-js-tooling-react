// import { CHANGE_LOCALE } from '../action/intl-action';
import _ from 'lodash'

const defaultState = {
  locales: {
    lang: 'en',
    messages: {}
  }
}

export default function intlReducer(state = _.cloneDeep(defaultState), action) {
  const clonedState = _.cloneDeep(state)

  switch (action.type) {
    // case CHANGE_LOCALE: {
    //     clonedState.locales.lang = action.data;
    //     return {
    //         ...clonedState,
    //     };
    // }

    default: {
      return clonedState
    }
  }
}
