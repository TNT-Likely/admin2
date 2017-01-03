import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE, ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from '../constants'
import fetch from '../utils/fetch'

//数据列表
export function fetchListRequest() {
  return {
    type: FETCH_LIST_REQUEST
  }
}

export function fetchListSuccess(data) {
  return {
    type: FETCH_LIST_SUCCESS,
    data
  }
}

export function fetchListFailure(error) {
  return {
    type: FETCH_LIST_FAILURE,
    error
  }
}

export function fetchList(api) {
  return dispatch => {
    //开始请求
    dispatch(fetchListRequest())

    fetch(api).then(r => {
      //请求成功
      dispatch(fetchListSuccess(r))

    }).catch(e => {

      //请求失败
      dispatch(fetchListFailure(e))
    })
  }
}

//添加一条数据
export function addItemRequest() {
  return {
    type: ADD_ITEM_REQUEST
  }
}

export function addItemSuccess(data) {
  return {
    type: ADD_ITEM_SUCCESS,
    data
  }
}

export function addItemFailure(error) {
  return {
    type: ADD_ITEM_FAILURE,
    error
  }
}

export function addItem(api, data) {
  return dispatch => {
    //开始请求
    dispatch(addItemRequest())

    fetch(api, 'POST', data).then(r => {
      //请求成功
      dispatch(addItemSuccess(r))

    }).catch(e => {

      //请求失败
      dispatch(addItemFailure(e))
    })
  }
}
