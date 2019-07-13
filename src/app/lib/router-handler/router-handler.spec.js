import _ from 'lodash'
import { createBrowserHistory } from 'history'
import configureStore from 'redux-mock-store'
import RouterHandler from './router-handler'

import '../../../util/config-mock-test-helper'

describe('RouterHandler', () => {
  describe('getRoutes', () => {
    it('should return with state definintinos from config', () => {
      //ASSIGN
      const expectedRoutes = JSON.stringify([
        {
          component: jest.fn(),
          name: 'test1',
          url: '/test1'
        },
        {
          component: jest.fn(),
          name: 'test2',
          url: '/test2'
        }
      ])
      //ACT
      const receivedRoutes = JSON.stringify(RouterHandler.getRoutes())
      //ASSERT
      expect(receivedRoutes).toEqual(expectedRoutes)
    })
  })

  describe('requireComponentRoute', () => {
    it('should proceed with state definition from config', () => {
      //ASSIGN
      const route = {
        component: 'TestScreen1',
        name: 'test1',
        url: '/test1'
      }
      const expectedRoute = {
        component: jest.fn(),
        name: 'test1',
        url: '/test1'
      }

      //ACT
      const receivedRoute = RouterHandler.requireComponentRoute(route)
      //ASSERT
      expect(JSON.stringify(receivedRoute)).toEqual(
        JSON.stringify(expectedRoute)
      )
      expect(typeof receivedRoute.component).toEqual('function')
    })
    it('return with undefined if input is unspecified', () => {
      expect(RouterHandler.requireComponentRoute()).toEqual(undefined)
      expect(RouterHandler.requireComponentRoute(null)).toEqual(undefined)
      expect(RouterHandler.requireComponentRoute(NaN)).toEqual(undefined)
    })
  })

  describe('getPlugins', () => {
    it('should return with Plugins', () => {
      //ASSIGN
      const mockStore = configureStore()
      const store = mockStore({})
      //ACT
      const receivedPlugins = RouterHandler.getPlugins(store)
      const isArray = Array.isArray(receivedPlugins)
      //ASSERT

      expect(isArray).toEqual(true)
      if (isArray && receivedPlugins.length) {
        expect(receivedPlugins.length).toBeGreaterThan(2)
        receivedPlugins.forEach(elem => {
          expect(typeof elem).toEqual('function')
        })
      }
    })
  })
  describe('getRouterMiddleware', () => {
    it('should return with router middleware', () => {
      //ASSIGN
      const history = createBrowserHistory()
      //ACT
      const receivedRouterMiddleware = RouterHandler.getRouterMiddleware(history)
      //ASSERT
      expect(typeof receivedRouterMiddleware).toEqual('function')
    })
  })
  describe('getRouterReducer', () => {
    it('should return with router reducer', () => {
      //ASSIGN
      const history = createBrowserHistory()
      //ACT
      const receivedRouterReducer = RouterHandler.getRouterReducer(history)
      //ASSERT
      expect(typeof receivedRouterReducer).toEqual('object')
      expect(typeof _.get(receivedRouterReducer, 'router', false)).toEqual(
        'function'
      )
    })
  })
})
