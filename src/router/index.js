
import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/index.js"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
    requiresAuth: true
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "home" */ '../views/About.vue')
  },
  {
    path: '/listCharacters',
    name: 'ListCharacters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "starships" */ '../components/ListCharacters.vue')
  },
  {
    path: '/itemCharacter/:id',
    name: 'ItemCharacter',
   component: () => import(/* webpackChunkName: "detailship" */ '../views/ItemCharacter.vue'),
   props:true
   },
   {
    path: '/login',
    name: 'Login',
   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
   props:true
   },
   {
     path: '/register',
     name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    props:true
    }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.auth) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router
