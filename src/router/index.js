import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home/Home'
import Classify from "@/components/Classify/Classify";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/home',
      children: [
          {
              path: 'home',
              name: 'home',
              component: Home
          },
          {
              path: 'classify',
              name: 'classify',
              component: Classify
          }
      ]
    }
  ]
})
