import _ from 'lodash'
import { connectRouter } from 'connected-react-router'
import { routerMiddleware } from 'connected-react-router'
import config from 'config'

export default class RouterHandler {
  static getRoutes() {
    const routes = []
    config.routes.forEach(route => {
      routes.push(this.requireComponentRoute(route))
    })

    return routes
  }

  static requireComponentRoute(route) {
    const componentFile = _.kebabCase(_.get(route, 'component', ''))

    if (!componentFile && !!route) {
      return route
    }

    if (!route) {
      return undefined
    }

    route.component = require(`container/${componentFile}/${componentFile}`).default

    return route
  }

  static getRouterMiddleware(router) {
    return routerMiddleware(router)
  }

  static getRouterReducer(history) {
    return {
      router: connectRouter(history)
    }
  }
}
