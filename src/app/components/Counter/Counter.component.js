import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				Counter component rendered
			</div>
		)
	}
}

Counter.propTypes = {
	title: PropTypes.string
}

export default Counter
