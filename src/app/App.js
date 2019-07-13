import { hot } from 'react-hot-loader/root'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { ConnectedRouter } from 'connected-react-router'
import RouterHandler from 'lib/router-handler/router-handler'
import PropTypes from 'prop-types'

const routes = RouterHandler.getRoutes()

const App = ({ history }) => (
  <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
)

App.propTypes = {
  history: PropTypes.object.isRequired
}
export default hot(App)
