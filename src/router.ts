import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import About from './views/home/About.vue'
import Center from './views/space/Center.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:"/space",
      name:"space",
      component: Center
    }
  ]
})
