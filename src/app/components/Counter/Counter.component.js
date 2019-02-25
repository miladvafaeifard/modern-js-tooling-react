import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CounterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increaseHandle = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  decreaseHandle = () => {
    this.setState(state => ({
      count: state.count > 0 ? state.count - 1 : 0
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p className="output-count">{this.state.count}</p>
        <button id="increaseButton" onClick={this.increaseHandle}>
          UP
        </button>
        <button id="decreaseButton" onClick={this.decreaseHandle}>
          DOWN
        </button>
      </div>
    )
  }
}

CounterComponent.propTypes = {
  title: PropTypes.string
}

export default CounterComponent
