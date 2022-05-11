import { request } from '@/utils/service'
import { serviceSuffix } from './service-suffix.js'

const baseURL = serviceSuffix.uc

/** 登录，返回 token */
export const accountLogin = (loginAccount: string, loginPwd: string) => {
  const data = { loginAccount: loginAccount, loginPwd: loginPwd }
  return request({
    url: baseURL + '/ioc/user/login',
    method: 'post',
    data
  })
}

export const logout = (token: string) => {
  const data = { token: token }
  return request({
    url: baseURL + '/ioc/user/logout',
    method: 'post',
    data
  })
}

export const userInfoRequest = (token: string) => {
  const data = { token: token }
  return request({
    url: baseURL + '/ioc/user/info',
    method: 'post',
    data
  })
}

// 获取领导驾驶仓的用户数
export const fetchUnitUserTree = () => {
  return request({
    url: baseURL + '/ioc/dept/all-info-detail?type=0',
    method: 'get',
    timeout: 20000
  })
}
