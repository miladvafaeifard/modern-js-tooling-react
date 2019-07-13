import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import { Provider } from 'react-redux'
import RouterHandler from './lib/router-handler/router-handler'
import StoreHandler from './lib/store-handler/store-handler'
// import { UIRouterReact, UIView } from '@uirouter/react';
import App from './App'

import './styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

// const router = new UIRouterReact();

// const routerMiddleware = RouterHandler.getRouterMiddleware(router);
const routerReducer = RouterHandler.getRouterReducer()

const store = StoreHandler.getStore([], routerReducer)

// const store = createStore(counterReducer, middlewares)

ReactDOM.render(
  // <React.StrictMode>
  <DefaultErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </DefaultErrorBoundary>,
  // </React.StrictMode>,
  document.getElementById('app')
)
