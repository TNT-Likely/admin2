import App from '../containers/App'

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: App },
  childRoutes: [
    { path: 'login', component: App },
    {
      path: 'inbox',
      component: App,
      childRoutes: [{
        path: 'messages/:id',
        onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
      }]
    }
  ]
}

export default routes