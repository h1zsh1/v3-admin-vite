/**
 * @Description:添加打包后的项目描述文件
 * @Author: shijianzhong
 * @Date: 2020-11-24
 */
var fs = require('fs')
var path = require('path')
var gitReversionF = require('./lib/git-version')
const gitReversion = new gitReversionF()
class IOCCopyRight {
  constructor(name = '前端项目') {
    const date = new Date()
    const commitId = gitReversion.commithash()

    this.content = `
      +++ IOC-FE出品 +++
      项目名：${name}
      打包时间：${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
      分支:${JSON.stringify(gitReversion.branch('name-rev ' + commitId))}
      commitId:${JSON.stringify(commitId)}
      `
    console.log('打包会生成copyright文件包含项目描述，便于现场项目部署区分')
    console.log(this.content)
    console.log(`----------------------------${name}-------------------------------`)
  }
  //
}

const IOCCopyRightPlugin = (name) => {
  return {
    name: 'IOC-copy-right-plugin',
    apply: 'build',
    closeBundle() {
      // 存储最终解析的配置
      let log = new IOCCopyRight(name)
      fs.writeFile(path.resolve(process.cwd()) + '/dist/CopyRight.txt', log.content, (error) => {
        // 创建失败
        if (error) {
          console.log(`打包log创建失败：${error}`)
        }
      })
    }
  }
}
module.exports = { IOCCopyRightPlugin }
