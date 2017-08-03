import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Form from '@/components/Form'
import Hello from '@/components/Hello'
import Filter from '@/components/Filter'
import Table from '@/components/Table'
import Summary from '@/components/Summary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
