/**
 * 获取请求的根路径
 */
function getBaseUrl(isSocket = false): string {
  console.log(isSocket, import.meta.env.VITE_APP_ENV)
  return window.serviceUrl(import.meta.env.VITE_APP_ENV, isSocket)
}
export default getBaseUrl
