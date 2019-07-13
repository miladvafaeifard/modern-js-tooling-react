import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import StoreHandler from 'lib/store-handler/store-handler'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import App from './App'

import './styles.css'
import Counter from 'container/counter/counter'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const store = StoreHandler.getStore([], [])

ReactDOM.render(
  <DefaultErrorBoundary>
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
      </Router>
    </Provider>
  </DefaultErrorBoundary>,
  document.getElementById('app')
)
