import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import mapStateToProps from './util/map-state'
import mapDispatchToProps from './util/map-dispatch'

export class Counter extends Component {
  increaseHandle = () => {
    this.props.action.increase()
  }

  decreaseHandle = () => {
    this.props.action.decrease()
  }

  render() {
    const { title, data } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <p className="output-count">{data.count}</p>
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

Counter.propTypes = {
  title: PropTypes.string,
  action: PropTypes.shape({
    increase: PropTypes.func,
    decrease: PropTypes.func
  }),
  data: PropTypes.shape({
    count: PropTypes.number
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
