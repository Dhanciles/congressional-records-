import { fetchData } from '../fetchData'; 
import { isLoading, hasErrored, fetDatatSuccess } from '../../actions/index.js'; 

describe('fetchData', () => {
  let mockUrl
  let mockQuery 
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.getdata.web'
    mockQuery = 'rare data'
    mockDispatch = jest.fn()
  })

  it('should call dispatch with the isLoading action', async () => {
    const thunk = fetchData(mockUrl, mockQuery)

   await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
})