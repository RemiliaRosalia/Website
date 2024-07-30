import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import JNJFotG from '../projects/JNJFotG.vue'
import GiftOfPain from '../projects/GiftPain.vue'
import NergModel from '../projects/NergModel.vue'
import RoyalFlush from '../projects/RoyalFlush.vue'
import MyWebsite from '../projects/MyWebsite.vue'
import MashnCloth from '../projects/MayaMashnCloth.vue'
import AmyView from '@/views/AmyView.vue'
import NibbleKnight from '@/projects/NibbleKnight.vue'
import Models2024 from '@/projects/3DModels2024.vue'
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
    path: '/project/Journeys_and_Jazz_The_Fruits_of_the_Gods',
    name: "JourneysAndJazzTheFruitsOfTheGods",
    component: JNJFotG
  },
  {
    path: '/project/Gift_of_Pain',
    name: "GiftOfPain",
    component: GiftOfPain
  },
  {
    path: '/project/Nerg_Model',
    name: "NergModel",
    component: NergModel
  },
  {
    path: '/project/Royal_Flush',
    name: "RoyalFlush",
    component: RoyalFlush
  },
  {
    path: '/project/My_Website',
    name: "MyWebsite",
    component: MyWebsite
  },
  {
    path: '/project/MASH_nCloth',
    name: "MashnCloth",
    component: MashnCloth
  },
  {
    path: '/project/NibbleKnight',
    name: "NibbleKnight",
    component: NibbleKnight
  },
  {
    path: '/project/3DModels2024',
    name: "3DModels2024",
    component: Models2024
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
