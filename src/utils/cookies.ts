/** cookies 封装 */

import Keys from '@/constant/key'
import Cookies from 'js-cookie'

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatus)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(Keys.sidebarStatus, sidebarStatus)

export const getActiveThemeName = () => Cookies.get(Keys.activeThemeName)
export const setActiveThemeName = (themeName: string) => {
  Cookies.set(Keys.activeThemeName, themeName)
}

export function getToken() {
  return Cookies.get(Keys.token) || localStorage.getItem(Keys.token)
}

export function setToken(token: string) {
  Cookies.set(Keys.token, token)
  localStorage.setItem(Keys.token, token)
}

export function removeToken() {
  Cookies.remove(Keys.token)
  localStorage.removeItem(Keys.token)
}
