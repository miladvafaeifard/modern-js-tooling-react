import React from 'react'
import { App } from './app'
import { shallow } from 'enzyme'

describe('App', () => {
  it('Renders without error', () => {
    shallow(<App />)
  })
})
