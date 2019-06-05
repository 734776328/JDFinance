import Home from '../views/Home/Home.vue'
export default [
  {
    path: '/',
    redirect: 'home', 
  },
  {
    path: '/home',
    component: Home
  }
]