import RouterHandler from '../router-handler/router-handler'
import StoreHandler from './store-handler'
import { UIRouterReact } from '@uirouter/react'

describe('RouterHandler', () => {
  describe('getStore', () => {
    it('should return with state store', () => {
      //ASSIGN
      const router = new UIRouterReact()
      const routerMiddleware = RouterHandler.getRouterMiddleware(router)
      const routerReducer = RouterHandler.getRouterReducer()
      const expectedStore = {
        dispatch: expect.any(Function),
        getState: expect.any(Function),
        replaceReducer: expect.any(Function),
        subscribe: expect.any(Function)
      }
      //ACT
      const receivedStore = StoreHandler.getStore(
        routerMiddleware,
        routerReducer
      )

      //ASSERT
      expect(receivedStore).toMatchObject(expectedStore)
    })
  })
})
