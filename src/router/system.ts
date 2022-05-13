import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')

/**
 * 动态路由
 */
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
      title: '权限管理',
      icon: 'lock',
      alwaysShow: true // 将始终显示根菜单
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '页面权限'
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: 'DirectivePermission',
        meta: {
          title: '指令权限' // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        }
      }
    ]
  }
]
