import DevTools from 'lib/dev-tools/dev-tools'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk'
import { rootReducer } from 'reducer'
import axios from 'axios'
import config from 'config'

export default class StoreHandler {
  static getStore(middleware, reducers) {
    const reducer = combineReducers({
      ...rootReducer,
      ...reducers
    })

    const endPoints = config.endpoints

    const client = axios.create({
      baseURL: endPoints.api,
      responseType: 'json'
    })

    const options = {
      returnRejectedPromiseOnError: true
    }

    const usedMiddleware = [thunk, middleware, axiosMiddleware(client, options)]

    return createStore(
      reducer,
      DevTools.composeEnhancers(applyMiddleware(...usedMiddleware))
    )
  }
}
