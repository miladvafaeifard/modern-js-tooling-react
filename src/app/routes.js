import Home from './container/home/home'
import Counter from './container/counter/counter'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/counter',
    component: Counter
  }
]
