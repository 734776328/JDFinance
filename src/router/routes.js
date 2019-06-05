import Main from '../views/Main/index.vue'
import Home from '../views/Home/Home.vue'
import MakeMoney from '../views/MakeMoney/MakeMoney.vue'
import BorrowMoney from '../views/BorrowMoney/BorrowMoney.vue'
export default [
  {
    path: '/',
    redirect: '/main', 
  },
  {
    path: '/main',
    component: Main,
    children: [
      {path: 'home', component: Home},
      {path: 'makemoney',component: MakeMoney},
      {path: 'borrowmoney',component: BorrowMoney}
    ]
  }
]