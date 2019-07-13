import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'

import Home from './container/home/home'
import Counter from './container/counter/counter'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </ConnectedRouter>
)

App.propTypes = {
  history: PropTypes.object.isRequired
}
export default hot(App)
