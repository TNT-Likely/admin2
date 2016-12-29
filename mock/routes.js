module.exports = {
  'api/': 'index.html',
  'api/rest/user/status': 'mock::user_status.js', //用户状态
  'post::api/rest/user/login': 'mock::user_login.js', //用户登录
  'api/rest/user/logout': 'mock::user_logout.js', //用户登出
  'api/rest/user/list': 'mock::user_list.js' //用户列表
};
