import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav'
import Responsive from '@/components/responsive'
import ButtonEffect from '@/components/buttonEffect'
import Todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav
    },
    {
      path: '/responsive',
      name: 'responsive',
      component: Responsive
    },
    {
      path: '/buttonEffect',
      name: 'buttonEffect',
      component: ButtonEffect
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: Todolist
    }
  ]
})
