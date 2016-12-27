import { LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, CHANGE_LOGIN_NAME, CHANGE_LOGIN_PASSWORD } from '../constants'

export function loginUserRequest(token) {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function loginUserSuccess(token) {
  return {
    type: LOGIN_USER_SUCCESS
  }
}

export function loginUser(name, password) {
  return (dispatch) => {
    dispatch(loginUserRequest())
    setTimeout(e => {
      dispatch(loginUserSuccess())
    }, 5000)
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
