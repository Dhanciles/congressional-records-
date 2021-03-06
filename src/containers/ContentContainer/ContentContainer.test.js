import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import { ContentContainer, mapStateToProps, mapDispatchToProps } from './ContentContainer'; 
import { proPublicaKey } from '../../constants.js'
import * as helper from '../../helper/helper.js'

describe('CardContainer', () => {
  let key
  let subject
  let url
  let mockFetch
  let mockDispatch
  let mockData
  let wrapper

  beforeEach(() => {
    key = proPublicaKey
    subject = 'mental-health'
    url = `https://api.propublica.org/congress/v1/bills/subjects/${subject}.json`
    mockFetch = jest.fn()
    mockDispatch = jest.fn()
    mockData = {
      'mental-health': [{billId: "hconres283-110"}],  
    }
    wrapper = shallow(<ContentContainer 
                          fetchData={mockFetch}
                          updateSelection={mockDispatch}
                          selection={subject}
                          data={mockData}
                          error={false}
                          isLoading={false}
                          />)
  })

  it.skip('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })
  describe('componentDidMount', () => {
    it('should call fetchCata with the corrct params', () => {

    })
  })
})