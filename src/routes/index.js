import login from '../containers/login'
import main from '../containers/main'
import app from '../containers/app'

const routes = {
  path: '/',
  component: app,
  indexRoute: { component: main },
  childRoutes: [
    { path: 'login', component: login }, {
      path: 'inbox',
      component: login,
      childRoutes: [{
        path: 'messages/:id',
        onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
      }]
    }
  ]
}

export default routes
