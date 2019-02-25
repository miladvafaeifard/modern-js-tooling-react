import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { CounterComponent } from './components/Counter/'

class App extends Component {
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
