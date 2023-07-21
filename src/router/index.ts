import { createRouter, createWebHashHistory } from 'vue-router'

import PackagesDependencies from '@/components/PackagesDependencies.vue'
import vue3EasyDataTable from '@/components/Vue3EasyDataTable.vue'
import NpmListDipendences from '@/components/NpmListDipendences.vue'

const routes = [
  {
    name: 'Vista Tabellare',
    path: '/',
    component: PackagesDependencies
  },
  {
    name: 'Componente Vue Dataset',
    path: '/vue-dataset',
    component: vue3EasyDataTable
  },
  {
    name: 'Vista Cards griglia',
    path: '/cards',
    component: NpmListDipendences
  }
]

const router = Router()

export default router

function Router() {
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  return router
}
