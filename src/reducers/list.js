import { FETCH_LIST_REQUEST, FETCH_LIST_FAILURE, FETCH_LIST_SUCCESS, ADD_ITEM_REQUEST, ADD_ITEM_FAILURE, ADD_ITEM_SUCCESS, SHOW_MODAL } from '../constants'

function login(state = { isLoading: false, data: {}, status: { showModal: false } }, action) {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {...state, isLoading: true }
    case FETCH_LIST_FAILURE:
      return {...state, isLoading: false, error: action.error }
    case FETCH_LIST_SUCCESS:
      return {...state, isLoading: false, data: action.data }
    case ADD_ITEM_REQUEST:
      return {...state, status: { isSaving: true, showModal: true } }
    case ADD_ITEM_SUCCESS:
      return {...state, status: { isSaving: false, showModal: false } }
    case ADD_ITEM_FAILURE:
      return {...state, status: { isSaving: false, showModal: true } }
    case SHOW_MODAL:
      return {...state, status: { showModal: true } }
    default:
      return state
  }
}

export default login
