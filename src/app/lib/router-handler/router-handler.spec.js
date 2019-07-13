import _ from 'lodash'
import configureStore from 'redux-mock-store'
import RouterHandler from './router-handler'
import { UIRouterReact } from '@uirouter/react'

describe('RouterHandler', () => {
  describe('getStates', () => {
    it('should return with state definintinos from config', () => {
      //ASSIGN
      const expectedStates = JSON.stringify([
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
      const receivedStates = JSON.stringify(RouterHandler.getStates())
      //ASSERT
      expect(receivedStates).toEqual(expectedStates)
    })
  })

  describe('requireComponentRoute', () => {
    it('should proceed with state definition from config', () => {
      //ASSIGN
      const state = {
        component: 'TestScreen1',
        name: 'test1',
        url: '/test1'
      }
      const expectedState = {
        component: jest.fn(),
        name: 'test1',
        url: '/test1'
      }

      //ACT
      const receivedState = RouterHandler.requireComponentRoute(state)
      //ASSERT
      expect(JSON.stringify(receivedState)).toEqual(
        JSON.stringify(expectedState)
      )
      expect(typeof receivedState.component).toEqual('function')
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
      const router = new UIRouterReact()
      //ACT
      const receivedRouterMiddleware = RouterHandler.getRouterMiddleware(router)
      //ASSERT
      expect(typeof receivedRouterMiddleware).toEqual('function')
    })
  })
  describe('getRouterReducer', () => {
    it('should return with router reducer', () => {
      //ASSIGN
      //ACT
      const receivedRouterReducer = RouterHandler.getRouterReducer()
      //ASSERT
      expect(typeof receivedRouterReducer).toEqual('object')
      expect(typeof _.get(receivedRouterReducer, 'router', false)).toEqual(
        'function'
      )
    })
  })
})
