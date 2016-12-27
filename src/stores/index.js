import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import createLogger from 'redux-logger' //logger中间件
import thunk from 'redux-thunk' //thunk 异步数据流中间件

function reduxStore(initialState) {
  const logger = createLogger()

  const store = createStore(reducers, initialState, compose(
    applyMiddleware(logger, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers') // eslint-disable-line global-require

      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default reduxStore
