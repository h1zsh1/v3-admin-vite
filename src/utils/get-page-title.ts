import sysConf from '@/config/sys-settings'

const title = sysConf.title || 'ioc vue template'

export default function getPageTitle(pageTitle: string | unknown): string {
  if (pageTitle && sysConf.showRouteTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
