import intlReducer from './intl-reducer'
import CounterReducer from 'container/counter/counter-reducer'

export const rootReducer = {
  intl: intlReducer,
  counter: CounterReducer
}
