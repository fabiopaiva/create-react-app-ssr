import Home from './Screens/Home'
import About from './Screens/About'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About
  }
]
