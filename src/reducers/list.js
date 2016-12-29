import { FETCH_LIST_REQUEST, FETCH_LIST_FAILURE, FETCH_LIST_SUCCESS } from '../constants'

function login(state = { isLoading: false, data: {} }, action) {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {...state, isLoading: true }
    case FETCH_LIST_FAILURE:
      return {...state, isLoading: false, error: action.error }
    case FETCH_LIST_SUCCESS:
      return {...state, isLoading: false, data: action.data }
    default:
      return state
  }
}

export default login
