import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ConnectCounterComponent, { Counter } from './counter'
import * as Actions from './counter-actions'
import counterReducer from './counter-reducer'

fdescribe('Counter component', () => {
  describe('using Redux support', () => {
    let wrapper
    const mockStore = configureStore()
    const initialState = {
      count: 0
    }

    const store = mockStore(initialState)

    beforeEach(() => {
      store.clearActions()
      wrapper = shallow(
        <Provider store={store}>
          <ConnectCounterComponent title="Timer" />
        </Provider>
      )
    })

    it('should init without crashing', () => {
      expect(wrapper.find(Counter).prop('title')).toBe('Timer')
    })

    it('dispatches action increase', () => {
      const expectedActions = [
        {
          type: 'INCREASE'
        }
      ]

      store.dispatch(Actions.increase())
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('dispatches action decrease', () => {
      const expectedActions = [
        {
          type: 'DECREASE'
        }
      ]

      store.dispatch(Actions.decrease())
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('test reducer', () => {
      let expected = initialState
      let action = { type: '' }
      expect(counterReducer(undefined, action)).toEqual(expected)

      expected = { count: 1 }
      action = { type: 'INCREASE' }
      expect(counterReducer(undefined, action)).toEqual(expected)

      expected = { count: 2 }
      action = { type: 'INCREASE' }
      expect(counterReducer({ count: 1 }, action)).toEqual(expected)

      expected = { count: 0 }
      action = { type: 'DECREASE' }
      expect(counterReducer({ count: 1 }, action)).toEqual(expected)
    })

    it('should fire increase action and count value to be equal 1', () => {
      wrapper.find('#increaseButton').simulate('click')
      expect(wrapper.find('p.output-count').text()).toBe('1')
    })
  })
})
