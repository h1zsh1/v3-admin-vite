import { request } from '@/utils/service'
import { serviceSuffix } from './service-suffix.js'

const messageURL = serviceSuffix.msg_service
const messageSettingsURL = serviceSuffix.basic_manage_platform

/**
 * 新增和修改消息设置
 * @param {Number} voiceFlag 是否声音提示，1是0否
 * @param {Number} clearFlag 是否清空看过的消息，1是0否
 */

export const addMsgConfig = (voiceFlag: number, clearFlag: number) => {
  const data = { voiceFlag: voiceFlag, clearFlag: clearFlag }
  return request({
    url: messageSettingsURL + '/portal/addMsgConfig',
    method: 'post',
    data
  })
}
/**
 * 获取消息设置
 */

export const findMsgConfig = () => {
  return request({
    url: messageSettingsURL + '/portal/findMsgConfig',
    method: 'get'
  })
}

/**
 * 消息置为已读
 * @param {*} msgId 消息id
 * @param {Number} readFlag 读取状态，1已读0未读
 * @param {Number} receiverCode 消息接收人标识（userId）
 */

export const updateReadState = (msgId: number, readFlag: number, receiverCode: number) => {
  const data = { msgId, readFlag, receiverCode }
  return request({
    url: messageURL + '/msg/updateReadState',
    method: 'post',
    data
  })
}
/**
 * 全部消息置为已读
 * @param {Number} readFlag 读取状态，1已读0未读
 * @param {Number} receiverCode 消息接收人标识（userId）
 */

export const updateAllReadState = (readFlag: number, receiverCode: number) => {
  const data = { readFlag, receiverCode }
  return request({
    url: messageURL + '/msg/updateAllReadState',
    method: 'post',
    data
  })
}

/**
 * 全部消息置为已读
 * @param {Number} readFlag 读取状态，1已读0未读
 * @param {Number} senderId 消息接收人标识（userId）
 * @param {Number} projectCode
 * @param {Number} msgTypeCode
 */

export const batchMsgConfigIsRead = (readFlag: number, senderId: number, projectCode: number, msgTypeCode: number) => {
  const data = {
    readFlag,
    senderId,
    projectCode,
    msgTypeCode,
    terminalCodeList: ['PC']
  }
  return request({
    url: messageURL + '/msg/batchMsgConfigIsRead',
    method: 'post',
    data
  })
}

/**
 * 获取全部未读消息数量
 * @param {*} terminalCodeList 渠道终端 PC端传PC
 * @param {*} senderId userId
 */
export const selectNotReadMsgCount = (senderId: number) => {
  const data = { terminalCodeList: ['PC'], senderId }
  return request({
    url: messageURL + '/msg/selectNotReadMsgCount',
    method: 'post',
    data
  })
}
/**
 * 删除消息
 * @param {Number} msgId
 * @param {Number} userId
 */
export const delMsgById = (msgId: number, userId: number) => {
  return request({
    url: messageURL + `/msg/delMsgById?msgId=${msgId}&userId=${userId}`,
    method: 'get'
  })
}
/**
 * 查询消息列表
 * @param {Object} data 查询条件，参见：http://192.168.200.12:8081/xiaoyaoji/doc/Y8P8b1n6S
 */

export const queryMsgList = (data: unknown) => {
  return request({
    url: messageURL + '/msg/querySendMsgList',
    method: 'post',
    data
  })
}

/**
 * 清空某个消息类型下的所有消息
 * @param {*} senderId
 * @param {*} readFlag
 * @param {*} projectCode
 * @param {*} msgTypeCode
 */

export const batchDelMsg = (senderId: number, readFlag: number, projectCode: number, msgTypeCode: number) => {
  const data = {
    senderId,
    readFlag,
    projectCode,
    msgTypeCode,
    terminalCodeList: ['PC']
  }
  return request({
    url: messageURL + '/msg/batchDelMsg',
    method: 'post',
    data
  })
}

/**
 * 查询消息左侧导航
 * @param {*} userId
 */

export const queryMsgNavitemTree = (userId: number) => {
  const data = {}
  const headers = {
    userId
  }

  return request({
    url: messageURL + '/msg/msgNavitemTree',
    method: 'post',
    data,
    headers
  })
}
/**
 * 查询最新5条
 * @param {*} senderId
 * @param {*} readFlag
 */

export const queryNewFiveMsgList = (senderId: number, readFlag: number) => {
  const data = {
    senderId,
    readFlag,
    terminalCodeList: ['PC'],
    pageNum: 1,
    pageSize: 5
  }
  return request({
    url: messageURL + '/msg/queryNewFiveMsgList',
    method: 'post',
    data
  })
}
/**
 * 获取消息资源
 * @param {*} data
 */
export const getResourceUrlByCode = (data: unknown) => {
  return request({
    url: messageSettingsURL + '/resource/getResourceUrlByCode',
    method: 'post',
    data
  })
}
