import login from '../containers/login'
import main from '../containers/main'

const routes = {
  path: '/',
  component: main,
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
