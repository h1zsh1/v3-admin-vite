/* eslint-disable no-unused-vars */
import store from '@/store'
import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { accountLogin, userInfoRequest, logout } from '@/api/login'
import DefaultUserIcon from '@/assets/user.png'
import { getWindowParentRef } from '@/utils'
import settingsConf from '@/config/sys-settings'

interface IUserState {
  token: string
  roles: string[]
  userId: number
  userName: string
  avatar: unknown
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => {
    return {
      token: getToken() || '',
      roles: [],
      userId: 0,
      userName: '',
      avatar: DefaultUserIcon
    }
  },
  actions: {
    /** 设置角色数组 */
    setRoles(roles: string[]) {
      this.roles = roles
    },
    /** 登录 */
    login(userInfo: { username: string; password: string }) {
      return new Promise((resolve, reject) => {
        accountLogin(userInfo.username.trim(), userInfo.password)
          .then((res: any) => {
            setToken(res.data.token)
            this.token = res.data.token
            resolve(true)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /** 获取用户详情 */
    getInfo() {
      return new Promise((resolve, reject) => {
        userInfoRequest(this.token)
          .then((res: any) => {
            this.roles = res.data.roleList
            this.userId = res.data.userId
            this.userName = res.data.userName
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    /** 登出 */
    logout(redirectPath?: string | undefined) {
      window.embed && window.parent.postMessage({ method: 'logout' }, getWindowParentRef())
      return new Promise<void>((resolve, reject) => {
        logout(this.token)
          .then(() => {
            removeToken()
            resetRouter()
            this.token = ''
            this.roles = []
            const loginUrl = redirectPath ? `/login?redirect=${redirectPath}` : '/login'
            settingsConf.useOwnLogin || window.debug
              ? router.push(loginUrl)
              : (window.location.href = settingsConf.logoutToUrl)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /** 重置 token */
    resetToken(redirectPath?: string | undefined) {
      removeToken()
      this.token = ''
      this.roles = []
      const loginUrl = redirectPath ? `/login?redirect=${redirectPath}` : '/login'
      settingsConf.useOwnLogin || window.debug
        ? router.push(loginUrl)
        : (window.location.href = settingsConf.logoutToUrl)
    }
  }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function loginPwd(loginAccount: any, arg1: string, loginPwd: any, password: string) {
  throw new Error('Function not implemented.')
}
