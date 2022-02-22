import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Login from '../components/LoginAuth.vue'
import Dashboard from '../components/Dashboard.vue'
import AnalyzPage from '../components/AnalyzPage'


Vue.use(VueRouter)

const routes =  [
  { path: '/', component: Dashboard },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '/analizler',
        component: AnalyzPage,
      },
      {
        path: '/nesne-turleri',
        name: 'Nesne Türleri',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackCh chunkName: "nesne-turleri" */ '../views/ObjectTypes.vue'),
        meta: { 
          auth: true,
        }
      },
      
      {
        path: '/kullanici-listesi',
        name: 'Kullanıcı Listesi',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "kullanici-yonetimi" */ '../views/UserManagement.vue'),
        meta: { 
          auth: true,
        }
      },
      {
        path: '/kullanici-ekle',
        name: 'Kullanıcı Ekle',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "user-add" */ '../views/UserAdd.vue'),
        meta: { 
          auth: true,
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

 router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
