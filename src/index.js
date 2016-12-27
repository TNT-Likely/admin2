import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores'
import { Router, Route, browserHistory } from 'react-router'
import routes from './routes/index'

const store = configureStore()

render(
  <Provider store={store}>
  	<Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>,

  document.getElementById('app')
)
