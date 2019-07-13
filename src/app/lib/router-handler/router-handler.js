import _ from 'lodash'
import config from 'config'

export default class RouterHandler {
  static getStates() {
    const states = []
    config.states.forEach(state => {
      states.push(this.getComponentState(state))
    })

    return states
  }

  static getComponentState(state) {
    const componentFile = _.kebabCase(_.get(state, 'component', ''))

    if (!componentFile && !!state) {
      return state
    }

    if (!state) {
      return undefined
    }

    if (state.deepStateRedirect) {
      state.deepStateRedirect = {
        fn: function(transition, target) {
          return target
        },
        default: state.deepStateRedirect.default
      }
    }

    state.component = require(`container/${componentFile}/${componentFile}`).default

    return state
  }

  static getRouterMiddleware(router) {
    return null
  }

  static getRouterReducer() {
    return {
      router: routerReducer
    }
  }
}
