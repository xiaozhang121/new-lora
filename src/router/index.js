import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/main.vue'
import Switch from '../views/switch/index.vue'
import Temper from '../views/temper/index.vue'
import Boil from '../views/boil/index.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      { path: '/switch', name: 'switch', component: Switch },
      { path: '/temper', name: 'temper', component: Temper },
      { path: '/boil', name: 'boil', component: Boil }
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
