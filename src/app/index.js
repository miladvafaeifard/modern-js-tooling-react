import React from 'react'
import ReactDOM from 'react-dom'

import { UIRouterReact, UIView } from '@uirouter/react'
import { ConnectedUIRouter } from '@uirouter/redux/lib/react'
import { Provider } from 'react-redux'

import RouterHandler from './lib/router-handler/router-handler'
import StoreHandler from './lib/store-handler/store-handler'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import App from './App'

import './styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const router = new UIRouterReact()

const routerMiddleware = RouterHandler.getRouterMiddleware(router)
const routerReducer = RouterHandler.getRouterReducer()

const store = StoreHandler.getStore(routerMiddleware, routerReducer)
const states = RouterHandler.getStates()
const plugins = RouterHandler.getPlugins(store)

ReactDOM.render(
  // <React.StrictMode>
  <DefaultErrorBoundary>
    <Provider store={store}>
      <ConnectedUIRouter router={router} plugins={plugins} states={states}>
        <App>
          <UIView />
        </App>
      </ConnectedUIRouter>
    </Provider>
  </DefaultErrorBoundary>,
  // </React.StrictMode>,
  document.getElementById('app')
)
