import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'page',
    component: () => import('../views/geo3/index/index.vue')
  },
  {
    path: '/p',
    name: 'page2',
    component: () => import('../views/geo5/index/index.vue')
  },
  {
    path: '/s',
    name: 'single',
    component: () => import('../views/single/index/index.vue')
  },
  {
    path: '/jvm',
    name: 'jvm',
    component: () => import('../views/jvm/index/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
