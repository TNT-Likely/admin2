import login from '../containers/login'
import main from '../containers/main'
import app from '../containers/app'
import info from '../containers/setting/info'
import security from '../containers/setting/security'
import user from 'containers/data/user'

const routes = {
  path: '/login',
  component: app,
  indexRoute: { component: login },
  childRoutes: [{
    path: '/',
    component: main,
    childRoutes: [{
      path: '/setting/info',
      component: info,
      onEnter: ({ params }, replace) => {

      },
      leave: () => {

      }
    }, {
      path: '/setting/security',
      component: security
    }, {
      path: '/data/user',
      component: user
    }]
  }]
}

export default routes
