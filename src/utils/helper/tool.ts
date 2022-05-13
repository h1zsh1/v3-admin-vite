/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * 简单深拷贝,适用于js对象
 * @param {*} obj
 */
export function easyClone(obj: object | undefined | null) {
  if (obj === undefined) {
    obj = null
  }
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 标准深拷贝
 * @param {*} obj
 */
export function deepClone(obj: unknown) {
  if (!obj || typeof obj !== 'object') {
    return obj
  }
  let result
  if (Array.isArray(obj)) {
    result = []
    obj.forEach((item: unknown) => {
      result.push(deepClone(item))
    })
  } else {
    result = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = deepClone(obj[key])
      }
    }
  }
  return result
}
