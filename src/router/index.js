import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'


const routes = [
    {
        path:'/',
        redirect: '/films/nowPlaying'
    },
    
    ...filmRouter,
    cinemaRouter,
    centerRouter,
   
   
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
