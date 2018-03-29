import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


import Home from '../pages/home/Home.vue'
import Discover from '../pages/discover/Discover.vue'
import Mine from '../pages/mine/Mine.vue'
import Order from '../pages/order/Order.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/order',
      component: Order
    },
    {
    	path: '**',
    	redirect: '/home'
    }
  ]
})
