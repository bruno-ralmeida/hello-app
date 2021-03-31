import Login from './components/login/Login'
import Home from './components/home/Home'

export const routes = [
  { path: '/', component: Login, name: 'login' },
  { path: '/home:lang', component: Home, name: 'home' },
]