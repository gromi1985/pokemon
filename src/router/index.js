import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
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
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
