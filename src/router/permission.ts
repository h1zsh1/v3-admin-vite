import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { useUserStoreHook } from '@/store/modules/user'
import { usePermissionStoreHook } from '@/store/modules/permission'
import { whiteList } from '@/config/white-list'
import { getToken, setToken } from '@/utils/cookies'
import asyncRouteSettings from '@/config/async-route'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'
import settings from '@/config/sys-settings'
import { getWindowParentRef } from '@/utils'

const userStore = useUserStoreHook()
const permissionStore = usePermissionStoreHook()
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  NProgress.start()
  if (to.query.token && typeof to.query.token === 'string') {
    setToken(to.query.token)
  }
  // 判断该用户是否登录
  if (getToken()) {
    // 如果用户信息不存在，需要获取用户信息
    if (!userStore.userId) {
      try {
        await userStore.getInfo()
      } catch (e) {
        console.log(e, '---用户信息出错')
        userStore.resetToken(to.path)
        NProgress.done()
        return
      }
    }

    if (to.path === '/login') {
      // 如果登录，并准备进入 login 页面，则重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      if (asyncRouteSettings.open) {
        if (!permissionStore.routesLoaded) {
          try {
            const powerRoutes = await permissionStore.getPowerRoutes()
            // 将'有访问权限的动态路由' 添加到 router 中
            powerRoutes.forEach((route) => {
              router.addRoute(route)
            })
            // 确保添加路由已完成
            // 设置 replace: true, 因此导航将不会留下历史记录
            next({ ...to, replace: true })
          } catch (e) {
            console.log(e, '---动态路由出错')
            userStore.resetToken(to.path)
            NProgress.done()
            return
          }
        }
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1 || settings.bypassLogin) {
      next()
    } else {
      window.embed && window.parent.postMessage({ method: 'logout' }, getWindowParentRef())
      settings.useOwnLogin || window.debug
        ? next(`/login?redirect=${to.path}`)
        : (window.location.href = settings.logoutToUrl)
    }
  }
})

router.afterEach((to: RouteLocationNormalized) => {
  document.title = getPageTitle(to.meta.title)
  NProgress.done()
})
