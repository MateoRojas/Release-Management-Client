import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Form from '@/components/Form'
import Alert from '@/components/Alert'
import Summary from '@/components/Summary'
import osServer from '@/components/osServer'
import addOsServer from '@/components/addOsServer'
import addHost from '@/components/addHost'
import Hosts from '@/components/Hosts'
import addServer from '@/components/addServer'

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
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/osServer',
      name: 'osServer',
      component: osServer
    },
    {
      path: '/addOsServer',
      name: 'addOsServer',
      component: addOsServer
    },
    {
      path: '/addHost',
      name: 'addHost',
      component: addHost
    },
    {
      path: '/hosts',
      name: 'Hosts',
      component: Hosts
    },
    {
      path: '/addServer',
      name: 'addServer',
      component: addServer
    }
  ]
})
