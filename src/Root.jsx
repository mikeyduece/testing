// Dependencies
import React                   from 'react'
import { Provider }            from 'react-redux'
import {
  createStore,
  applyMiddleware
}                              from 'redux'
import reducers                from 'reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk              from 'redux-thunk'
import stateValidator          from 'middlewares/stateValidator'

export default ({ children, initialState }) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(reduxThunk, stateValidator))
  )

  return (
    <Provider store={ store }>
      { children }
    </Provider>
  )
}