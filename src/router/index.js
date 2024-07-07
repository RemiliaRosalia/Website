import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import JNJFotG from '../projects/JNJFotG.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import('../views/CVView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue')
  },
  //{
    //path: '/project/:id',
    //name: "project",
    //component: ProjectView,
    //props: true
  //},
  {
    path: '/project/JourneysAndJazzTheFruitsOfTheGods',
    name: "JourneysAndJazzTheFruitsOfTheGods",
    component: JNJFotG
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
