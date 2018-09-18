import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // }, 
    {
      path: '/badge',
      name: 'Badge',
      component: () =>  import ( /* webpackChunkName: "about" */ './views/Badge.vue')
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }, 
    {
      path: '/confirm',
      name: 'Confirm',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/Confirm.vue')
    },
    {
      path: '/survey',
      name: 'Survey',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Survey.vue')
    },
     {
       path: '/processedSurvey',
       name: 'Processed Survey',
       // route level code-splitting
       // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () =>
         import ( /* webpackChunkName: "about" */ './views/ProcessedSurvey.vue')
     }, {
      path: '/cert',
      name: 'Certificate',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/Cert.vue')
    }
  ]
})
