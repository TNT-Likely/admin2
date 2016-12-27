window.$ = window.Zepto = require('npm-zepto')
let host = require('../config/dev').default.api
import cookies from 'js-cookie'

export default (url, type, data) => {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: host + url,
      type: type || 'GET',
      headers: { 'Content-Type': 'application/json', 'accessToken': cookies.get('accessToken') },
      data: !!data ? JSON.stringify(data) : '',
      success: function(result) {
        if (result.code == '0')
          resolve(result.data)
        else
          reject(result)
      },
      error: function(err) {
        console.error('api调用失败')
      }
    })
  })
}
