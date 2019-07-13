import React from 'react'
import { Home } from './home'
import { shallow } from 'enzyme'

describe('Home', () => {
  it('Renders without error', () => {
    shallow(<Home />)
  })
})
