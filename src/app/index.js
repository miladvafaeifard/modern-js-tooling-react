import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { AppContainer } from 'react-hot-loader'

import StoreHandler from 'lib/store-handler/store-handler'
import RouterHandler from 'lib/router-handler/router-handler'
import DefaultErrorBoundary from './DefaultErrorBoundary'

import './styles.css'
import App from './App'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}
const history = createBrowserHistory()
const routerMiddleware = RouterHandler.getRouterMiddleware(history)
const routerReducer = RouterHandler.getRouterReducer(history)

const store = StoreHandler.getStore(routerMiddleware, routerReducer)

ReactDOM.render(
  <AppContainer>
    <DefaultErrorBoundary>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </DefaultErrorBoundary>
  </AppContainer>,
  document.getElementById('app')
)
