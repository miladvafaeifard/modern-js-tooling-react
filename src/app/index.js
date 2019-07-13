import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import StoreHandler from 'lib/store-handler/store-handler'
import RouterHandler from 'lib/router-handler/router-handler'
import DefaultErrorBoundary from './DefaultErrorBoundary'

import App from './App'
import './styles.css'
import Counter from 'container/counter/counter'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}
const history = createBrowserHistory()
const routerMiddleware = RouterHandler.getRouterMiddleware(history)
const routerReducer = RouterHandler.getRouterReducer(history)

const store = StoreHandler.getStore(routerMiddleware, routerReducer)

ReactDOM.render(
  <DefaultErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/counter" component={Counter} />
        </Router>
      </ConnectedRouter>
    </Provider>
  </DefaultErrorBoundary>,
  document.getElementById('app')
)
