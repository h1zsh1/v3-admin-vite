import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')

import asyncRouteSettings from '@/config/async-route'
import settings from '@/config/sys-settings'
import { asyncRoutes } from '@/router/system'
import { usePermissionStoreHook } from '@/store/modules/permission'

/** 常驻路由 */
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    // redirect: '/demo',
    meta: {
      hidden: true
    }
  },

  {
    path: '/message',
    component: Layout,
    meta: { title: '消息列表', hidden: true },
    children: [
      {
        path: '',
        meta: { title: '消息列表' },
        component: () => import('@/views/login/index.vue')
      }
    ]
  }
]

// 必须将 'ErrorPage' 路由放在最后, Must put the 'ErrorPage' route at the end
export const redirectTo404Route = {
  path: '/:pathMatch(.*)*',
  component: Layout,
  redirect: '/404',
  name: 'ErrorPage',
  meta: {
    title: '错误页面',
    icon: '404',
    hidden: true
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/error-page/401.vue'),
      name: '401',
      meta: {
        title: '401'
      }
    },
    {
      path: '404',
      component: () => import('@/views/error-page/404.vue'),
      name: '404',
      meta: {
        title: '404'
      }
    }
  ]
}

// 如果设置不使用框架的登录页，需要去除登录页面的路由
if (!settings.useOwnLogin) {
  constantRoutes.shift()
}
// 如果不开启消息功能，需去除相应路由
if (!settings.useMsg) {
  const msgIndex = constantRoutes.findIndex((item) => item.path === '/message')
  constantRoutes.splice(msgIndex, 1)
}

if (!asyncRouteSettings.open) {
  // 非动态路由逻辑
  constantRoutes.push(...asyncRoutes)
  constantRoutes.push(redirectTo404Route)
  usePermissionStoreHook().setAppRoutes(constantRoutes)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name } = route
      if (name) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器，不过体验不是很好
    window.location.reload()
  }
}

export default router
