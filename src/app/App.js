import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { NavLink } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <NavLink to="/" activeClassName="hurray">
          Home
        </NavLink>
        <NavLink to="/counter" activeClassName="hurray">
          counter
        </NavLink>
      </div>
    )
  }
}

App.propTypes = {}

const hotFunction = hot(module)
export default hotFunction(App)
