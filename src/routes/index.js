import login from '../containers/login'
import main from '../containers/main'
import app from '../containers/app'
import info from '../containers/setting/info'
import security from '../containers/setting/security'

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

      }
    }, {
      path: '/setting/security',
      component: security,
      onEnter: ({ params }, replace) => {

      }
    }]
  }]
}

export default routes
