import login from 'containers/login'
import main from 'containers/main'
import app from 'containers/app'

const routes = {
  path: '/login',
  component: app,
  indexRoute: { component: login },
  childRoutes: [{
    path: '/',
    component: main,
    childRoutes: [{
      path: '/setting/info',
      getComponents(location, callback) {
        require.ensure([], function(require) {
          callback(null, require('containers/setting/info'))
        })
      }
    }, {
      path: '/setting/security',
      getComponents(location, callback) {
        require.ensure([], function(require) {
          callback(null, require('containers/setting/security'))
        })
      }
    }, {
      path: '/data/user',
      getComponents(location, callback) {
        require.ensure([], function(require) {
          callback(null, require('containers/data/user'))
        })
      }
    }]
  }]
}

export default routes
