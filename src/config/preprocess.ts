import { getUrlSearch } from '@/utils/helper/url'

const iframeDisabledOrigin = '*'

export default function preprocess() {
  // 监听内部页面传递的消息
  window.addEventListener('message', (e) => {
    if (e.origin === iframeDisabledOrigin) {
      return
    }
    // console.log(e, '-----接收到message', window)
    if (e.data.method === 'logout') {
      // 执行登出 todo
    }
  })

  // url中拼接了embed参数 可以关闭侧边导航和头部导航
  if (window.top !== window.self || !!getUrlSearch('embed')) {
    window.embed = true
  }
}
