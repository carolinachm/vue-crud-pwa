import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cliente from '@/components/Cliente'
import Login from '@/components/Login'
import Galeria from '@/components/Galeria'
import Categoria from '@/components/Categoria'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cliente/',
      name: 'Cliente',
      component: Cliente
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: Galeria
    },
    {
      path: '/categoria',
      name: 'Categoria',
      component: Categoria
    }
  ]
})
