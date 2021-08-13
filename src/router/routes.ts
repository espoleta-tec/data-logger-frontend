import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'dashboard' },
      { path: 'settings', component: () => import('pages/station/Index.vue'), name: 'settings' },
      { path: 'station/:id', component: () => import('pages/station/Details.vue'), props: true },
      { path: 'download', component: () => import('pages/download/Index.vue'), name: 'download' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
