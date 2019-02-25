import React from 'react'
import { shallow } from 'enzyme'
import CounterComponent from './Counter.component'

describe('Counter component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CounterComponent title="Timer" />)
  })

  it('renders without error', () => {
    shallow(<CounterComponent />)
  })

  it('renders title', () => {
    // ASSIGN
    // ACT
    // ASSERT
    expect(wrapper.instance().props.title).toBe('Timer')
  })

  it('should initialize count zero', () => {
    // ASSIGN
    // ACT
    // ASSERT
    expect(wrapper.instance().state.count).toBe(0)
  })

  it('should increase count 1', () => {
    // ASSIGN
    // ACT
    wrapper.find('#increaseButton').simulate('click')

    // ASSERT
    expect(wrapper.instance().state.count).toBe(1)
  })

  it('should increase count 2', () => {
    // ASSIGN
    // ACT
    wrapper.find('#increaseButton').simulate('click')
    wrapper.find('#increaseButton').simulate('click')

    // ASSERT
    expect(wrapper.instance().state.count).toBe(2)
  })

  it('should decrease count 2 to count 1', () => {
    // ASSIGN
    // ACT
    wrapper.find('#increaseButton').simulate('click')
    wrapper.find('#increaseButton').simulate('click')
    wrapper.find('#decreaseButton').simulate('click')

    // ASSERT
    expect(wrapper.instance().state.count).toBe(1)
  })

  it('should render count', () => {
    // ASSIGN
    // ACT
    wrapper.find('#increaseButton').simulate('click')
    wrapper.find('#increaseButton').simulate('click')

    // ASSERT
    expect(wrapper.find('p.output-count').text()).toBe('2')
  })

  it('should not be rendered minus count', () => {
    // ASSIGN
    // ACT
    wrapper.find('#decreaseButton').simulate('click')
    wrapper.find('#decreaseButton').simulate('click')

    // ASSERT
    expect(wrapper.find('p.output-count').text()).toBe('0')
  })
})
