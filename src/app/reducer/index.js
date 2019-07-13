import intlReducer from './intl-reducer'
import CounterReducer from 'container/Counter/Counter.reducer'

export const rootReducer = {
  intl: intlReducer,
  counter: CounterReducer
}
