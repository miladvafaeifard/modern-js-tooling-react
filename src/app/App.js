import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import CounterComponent from './container/Counter/Counter.component'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <CounterComponent title="Timer" />
      </div>
    )
  }
}

App.propTypes = {}

const hotFunction = hot(module)
export default hotFunction(App)
