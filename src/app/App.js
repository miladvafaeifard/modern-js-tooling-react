import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

App.propTypes = {}

const hotFunction = hot(module)
export default hotFunction(App)
