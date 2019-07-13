import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import StoreHandler from './lib/store-handler/store-handler'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import App from './App'

import './styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const store = StoreHandler.getStore([], [])

ReactDOM.render(
  <DefaultErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </DefaultErrorBoundary>,
  document.getElementById('app')
)
