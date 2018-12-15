import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader'

import '../styles.css'


class App extends Component {
    state = {
        count: 0
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Hello World</h1>
                <h2 className={count >= 5? 'warning' : ''} >count: {count}</h2>
                <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
                <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
            </div>
        );
    }
}

App.propTypes = {

};

const hotFunction = hot(module)
export default hotFunction(App)