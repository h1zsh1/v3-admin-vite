export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export const isValidURL = (url: string) => {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

// 检查非特殊符号
export function checkNoSpecialCode(val: string): boolean {
  return /^[\w\u4e00-\u9fa5-]*$/.test(val)
}

// 检查长度
export function checkLength(val: string, leng: number): boolean {
  return val.length === leng
}

// 检查中文
export function checkChineseName(chineseName: string): boolean {
  const reg = /^[\u4e00-\u9fa5]+$/
  return reg.test(chineseName)
}

// 检查中文 可以为空
export function checkChineseNameMaybeNull(chineseName: string): boolean {
  const reg = /^[\u4e00-\u9fa5]*$/
  return reg.test(chineseName)
}

// 检查中英文
export function checkName(name: string): boolean {
  const reg = /^[\u4e00-\u9fa5a-zA-Z()]+$/
  return reg.test(name)
}

// 检查数字和字母
export function checkNumAndLetter(numAndletter: string): boolean {
  const reg = /^[a-zA-Z0-9]*$/
  return reg.test(numAndletter)
}
// 检查IP地址
export function _checkHost(host: string): boolean {
  const reg = /^[0-9a-zA-Z.]{1,20}$/
  return reg.test(host)
}

// 检查数字
export function _checkNum(num: string): boolean {
  const reg = /^(\d{1,10})*$/
  return reg.test(num)
}
// 只能输入整数或小数的正则表达式
export function checkNumAndDecimal(num: string): boolean {
  const reg = /^[0-9]+([.]{1}[0-9]+){0,1}$/
  return reg.test(num)
}
// 检查身份证号
export function checkIdcard(Idcard: string): boolean {
  const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/
  return reg.test(Idcard)
}

// 检查身份证号 可以为空
export function checkIdcardMaybeNull(Idcard: string): boolean {
  const reg = /^((\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x))*$/
  return reg.test(Idcard)
}

// 检查手机号码
export function checkTel(tel: string): boolean {
  const reg = /^[1][0-9]{10}$/
  return reg.test(tel)
}

// 检查手机号码 可以为空
export function checkTelMaybeNull(tel: string): boolean {
  const reg = /^([1][0-9]{10})*$/
  return reg.test(tel)
}

// 检查银行卡号
export function checkBankCard(bankcard: string): boolean {
  const reg = /^(\d{1,30})$/
  return reg.test(bankcard)
}

// 检查邮箱
export function checkEmail(email: string): boolean {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]{2,4})+/
  return reg.test(email)
}

// 检查邮箱 可以为空
export function checkEmailMaybeNull(email: string): boolean {
  const reg = /^(([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]{2,4})+)*$/
  return reg.test(email)
}

// 检查第一位非0数字
export function positiveInteger(verifyCode: string): boolean {
  const reg = /^[1-9]+[0-9]*$/
  return reg.test(verifyCode)
}

// 检查小数
export function decimal(verifyCode: string): boolean {
  const reg = /^(([1-9]\d*\.?\d*)|(\d*\.\d+))$/
  return reg.test(verifyCode)
}

// 检查小数 只能是两位小数
export function decimalRate(verifyCode: string): boolean {
  const reg = /^[0-9]+\.\d{2}$|^[1-9]\d*$/
  return reg.test(verifyCode)
}

// 检查英文数字
export function EnglshDagital(verifyCode: string): boolean {
  const reg = /^[a-zA-Z0-9]+$/
  return reg.test(verifyCode)
}

// 检查是否是正常版本
export function checkVersion(version: string): boolean {
  const reg = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}$/ // 版本的正则表达式;
  return reg.test(version)
}

// 检查手机号或者固话
export function checkPhoneOrTell(phone: string): boolean {
  const reg = /^((0\d{2,3}-?\d{7,8})|(1[3465789]\d{9}))$/
  return reg.test(phone)
}
