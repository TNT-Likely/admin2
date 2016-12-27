/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux'
import { LOGIN_USER_REQUEST, LOGIN_USER_FAILULE, LOGIN_USER_SUCCESS, CHANGE_LOGIN_NAME, CHANGE_LOGIN_PASSWORD } from '../constants'

function login(state = { isLoading: false, data: {} }, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {...state, isLoading: true }
    case LOGIN_USER_FAILULE:
      return {...state, isLoading: false }
    case LOGIN_USER_SUCCESS:
      return {...state, isLoading: false, data: { name: 'sunxiao' }, name: undefined, password: undefined }
    case CHANGE_LOGIN_NAME:
      return {...state, name: action.text }
    case CHANGE_LOGIN_PASSWORD:
      return {...state, password: action.text }
    default:
      return state
  }
}

const combined = combineReducers({
  login
})

module.exports = combined
