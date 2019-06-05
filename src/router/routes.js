import Home from '../views/Home/Home.vue'
import CenterContent from '../views/Home/CenterContent/CenterContent.vue'
export default [
  {
    path: '/',
    redirect: '/home/center', 
  },
  {
    path: '/home',
    component: Home,
    children: [
      {path: 'center', component: CenterContent}
    ]
  }
]