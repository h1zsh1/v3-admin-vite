/**
 * 修改IP 前端页面api请求地址各环境配置
 * @param {*} env
 * @param {*} serverName
 * @param {*} isSocket
 */
window.serviceUrl = function (env, isSocket) {
  switch (env) {
    case 'dev':
      return `${isSocket ? 'ws' : 'http'}://10.255.144.70/`
    case 'test':
      return `${isSocket ? 'ws' : 'http'}://10.255.144.119/`
    case 'stage':
      // 现场部署时请把 ”部署环境的ip地址“ 这段文字修改成目标服务器的ip地址
      return `${isSocket ? 'ws' : 'http'}://部署环境的ip地址/`
  }
}

/**
 * 前端配置繁星平台的登录页面地址
 * @param {*} env 环境标识
 */
window.login_page_url = function (env) {
  switch (env) {
    case 'dev':
      return 'http://10.255.144.70/ioc-fx-portal-web/#/login?redirect=%2F'
    case 'test':
      return 'http://10.255.144.119/ioc-fx-portal-web/#/login?redirect=%2F'
    case 'stage':
      // 现场部署时请把 ”部署环境的繁星平台地址“ 这段文字修改成部署现场繁星平台的地址
      return '部署环境的繁星平台地址'
  }
}
