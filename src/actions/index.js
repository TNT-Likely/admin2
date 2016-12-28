import { LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, CHANGE_LOGIN_NAME, CHANGE_LOGIN_PASSWORD } from '../constants'
import fetch from '../utils/fetch'
import { browserHistory } from 'react-router'

export function loginUserRequest(token) {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function loginUserSuccess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    data
  }
}

export function loginUserFailure(token) {
  return {
    type: LOGIN_USER_FAILURE
  }
}

export function loginUser(name, password) {
  return (dispatch) => {
    dispatch(loginUserRequest())
    fetch('/rest/user/login', 'POST', { nameOrEmail: name, password: password }).then(r => {
      dispatch(loginUserSuccess(r))
      browserHistory.push('/')
    }).
    catch(e => {
      dispatch(loginUserFailure())
    })
  }
}

//改变用户名
export function changeName(text) {
  return {
    type: CHANGE_LOGIN_NAME,
    text
  }
}

//改变密码
export function changePassword(text) {
  return {
    type: CHANGE_LOGIN_PASSWORD,
    text
  }
}
