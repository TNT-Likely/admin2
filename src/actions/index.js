import { LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, CHANGE_LOGIN_NAME, CHANGE_LOGIN_PASSWORD, LOGOUT_USER_SUCCESS } from '../constants'
import fetch from '../utils/fetch'
import cookies from 'js-cookie'
import { browserHistory } from 'react-router'

//登录请求过程
export function loginUserRequest(token) {
  return {
    type: LOGIN_USER_REQUEST
  }
}

//登录成功
export function loginUserSuccess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    data
  }
}

//登录失败
export function loginUserFailure(token) {
  return {
    type: LOGIN_USER_FAILURE
  }
}

//登录
export function loginUser(name, password) {
  return (dispatch) => {
    dispatch(loginUserRequest())
    fetch('/rest/user/login', 'POST', { nameOrEmail: name, password: password }).then(r => {
      dispatch(loginUserSuccess(r))

      //设置cookie
      cookies.set('accessToken', r.accessToken)
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

//登出
export function logoutUserSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS
  }
}

//用户登录态检查
export function checkUserStatus() {
  return (dispatch) => {
    fetch('/rest/user/status').then(r => {
      dispatch(loginUserSuccess(r))
      if (browserHistory.getCurrentLocation().pathname == '/login') {
        browserHistory.push('/')
      }
    }).catch(e => {
      browserHistory.push('/login')
    })
  }
}

//用户登出
export function logoutUser() {
  return (dispatch) => {
    fetch('/rest/user/logout').then(r => {
      browserHistory.push('/login')
      cookies.remove('accessToken')
    }).catch(e => {

    })
  }
}
