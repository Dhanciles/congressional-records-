import React from 'react'
import { shallow } from 'enzyme'
import { ExploreFilter } from './ExploreFilter'

describe('ExploreFilter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ExploreFilter />)
  })
  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})