import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'
import VuexCmp from '@/views/Vuex'
import Login from './routes/login'
import City from '@/views/City/Index'
const routes = [
    {
        path:'/',
        redirect: '/films/nowPlaying'
    },
    {
        path:'/vuex',
        component : VuexCmp
    },
    {
        path:'/city',
        component: City
    },
    ...filmRouter,
    cinemaRouter,
    centerRouter,
    Login,
   
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
