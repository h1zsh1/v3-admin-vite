//import powerData from './demo-data/demo-power-data' // 动态路由的模拟数据
import { userInfoRequest } from '@/api/login' // 动态路由的获取接口
import settings from '@/config/sys-settings'

// 预制的系统路由
import { asyncRoutes } from '@/router/system'

// 请求动态路由数据
export async function getPowerList(token: string) {
  const powerList = await userInfoRequest(token)
  // 使用demo 实际使用请上边一行
  //const powerList = powerData

  if (powerList['code'] === 0) {
    return (
      powerList.data &&
      powerList.data.navTreeVOList &&
      powerList.data.navTreeVOList.filter((x: any) => x.navCode === settings.sysCode)[0] &&
      powerList.data.navTreeVOList.filter((x: any) => x.navCode === settings.sysCode)[0].childList
    )
  } else {
    throw Error()
  }
}

/**
 * 解析权限列表为动态路由
 * @param {Array} powerList
 * @param {Object} redirectTo404Route
 * @returns 动态生成的路由表
 */
export function analysisPowerToRoutes(powerList: Array<any>, redirectTo404Route: Object) {
  let routes = []
  // 对比配置的动态路由表，对预制的系统路由表进行删减，配置覆盖
  routes = makeSysRoutes(asyncRoutes, powerList)
  routes.push(redirectTo404Route)
  return routes
}

function makeSysRoutes(arr: Array<any>, arr_2: Array<any>) {
  const _arr: Array<any> = []
  if (!Array.isArray(arr) || !Array.isArray(arr_2)) {
    return _arr
  }
  arr.map((item) => {
    const arr_filter = arr_2.filter((i) => {
      return i.navCode === item.navCode
    })
    if (arr_filter.length) {
      item.meta.title = arr_filter[0].navName || item.meta.title || ''
      item.meta.icon = arr_filter[0].icon || item.meta.icon || ''

      if (Array.isArray(item.children)) {
        item.children = makeSysRoutes(item.children, arr_filter[0].childList)
      }
      _arr.push(item)
    }
  })
  return _arr
}
