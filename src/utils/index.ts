import dayjs from 'dayjs'
/** 格式化时间 */
export const formatDateTime = (time: any) => {
  if (time == null || time === '') {
    return 'N/A'
  }
  const date = new Date(time)
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 被做为iframe嵌入时，获取父容器的页面路径
 */
export function getWindowParentRef() {
  let url = ''
  try {
    url = window.top.document.referrer
  } catch (M) {
    if (window.parent) {
      try {
        url = window.parent.document.referrer
      } catch (L) {
        url = ''
      }
    }
  }
  if (url === '') {
    url = document.referrer
  }
  return url
}
