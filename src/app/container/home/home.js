import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Home extends Component {
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

Home.propTypes = {}

export default Home
