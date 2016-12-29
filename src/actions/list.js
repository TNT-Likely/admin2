import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from '../constants'
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
    dispatch(fetchListRequest)

    fetch(api).then(r => {
      //请求成功
      dispatch(fetchListSuccess(r))

    }).catch(e => {

      //请求失败
      dispatch(fetchListFailure(e))
    })
  }
}
