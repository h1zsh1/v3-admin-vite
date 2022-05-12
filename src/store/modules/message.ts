import { addMsgConfig, findMsgConfig, queryNewFiveMsgList, updateReadState, selectNotReadMsgCount } from '@/api/message'

import { easyClone } from '@/utils/helper/tool'

import store from '@/store'
import { defineStore } from 'pinia'

interface IMessageState {
  unreadNum: number
  newMsgList: Array<any>
  msgSettings: IMsgSettings
}

interface IMsgSettings {
  voiceFlag: number
  clearFlag: number
}

interface queryNewFiveMsgListParams {
  senderId: number
  readFlag: number
}

interface readMsgByIdParams {
  msgId: number
  userId: number
}

export const messageState = defineStore({
  id: 'message',
  state: (): IMessageState => {
    return {
      unreadNum: 0,
      newMsgList: [],
      msgSettings: {
        voiceFlag: 1,
        clearFlag: 0
      }
    }
  },
  actions: {
    async getMsgSettings() {
      const settingsData = await findMsgConfig()
      if (settingsData.data) {
        this.msgSettings.voiceFlag = settingsData.data.voiceFlag
        this.msgSettings.clearFlag = settingsData.data.clearFlag
      }
    },
    async submitMsgSettings(data: IMsgSettings) {
      await addMsgConfig(data.voiceFlag, data.clearFlag)
      this.msgSettings.voiceFlag = data.voiceFlag
      this.msgSettings.clearFlag = data.clearFlag
    },
    async getMsgTipList(data: queryNewFiveMsgListParams) {
      const newMsgListData = await queryNewFiveMsgList(data.senderId, data.readFlag)
      const newMsgList = newMsgListData.data.list
      this.newMsgList = newMsgList
      const countData = await selectNotReadMsgCount(data.senderId)
      this.unreadNum = countData.data
    },
    async readMsgById(data: readMsgByIdParams) {
      await updateReadState(data.msgId, 1, data.userId)
      const msgItem = this.newMsgList.find((item) => item.msgId === data.msgId)
      msgItem.readFlag = 1
      this.newMsgList = easyClone(this.newMsgList)
      this.unreadNum = this.unreadNum - 1
    }
  }
})

/** 在 setup 外使用 */
export function messageStateHook() {
  return messageState(store)
}
