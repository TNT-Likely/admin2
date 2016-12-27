import login from '../containers/login'

const routes = {
  path: '/',
  component: login,
  indexRoute: { component: login },
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
