import store from '@/store'
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes, redirectTo404Route } from '@/router'
import { getPowerList, analysisPowerToRoutes } from '@/alter/route'
import { getToken } from '@/utils/cookies'

interface IPermissionState {
  routes: RouteRecordRaw[]
  dynamicRoutes: RouteRecordRaw[]
  routesLoaded: Boolean
}

export const usePermissionStore = defineStore({
  id: 'permission',
  state: (): IPermissionState => {
    return {
      routes: [],
      dynamicRoutes: [],
      routesLoaded: false
    }
  },
  actions: {
    async getPowerRoutes() {
      const powerList = await getPowerList(getToken() || '')
      const powerRoutes = analysisPowerToRoutes(powerList, redirectTo404Route)
      this.routesLoaded = true
      this.routes = constantRoutes.concat(powerRoutes)
      return powerRoutes
    }
  }
})

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
