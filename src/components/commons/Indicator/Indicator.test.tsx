// Libs
import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

// Components
import Indicator from './index'

describe('Indicator component', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Indicator />)
  })

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
