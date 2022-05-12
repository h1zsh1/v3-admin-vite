/**
 * @Description:类型判断
 * @Author: zhangsen
 * @Date: 2020-12-10
 */

const judgment = {
  run: function (item: string): string {
    return this.toString.call(item).replace(/(\[|object|(^\s+)|(\s+$)|\s+|])/g, '')
  }
}

export function isNumber(item: string): boolean {
  return judgment.run(item) === 'Number'
}

export function isNull(item: string): boolean {
  return judgment.run(item) === 'Null'
}

export function isUndefined(item: string): boolean {
  return judgment.run(item) === 'Undefined'
}

export function isString(item: string): boolean {
  return judgment.run(item) === 'String'
}

export function isBoolean(item: string): boolean {
  return judgment.run(item) === 'Boolean'
}

export function isSymbol(item: string): boolean {
  return judgment.run(item) === 'Symbol'
}

export function isObject(item: string): boolean {
  return judgment.run(item) === 'Object'
}

export function isFunction(item: string): boolean {
  return judgment.run(item) === 'Function'
}

export function isRegExp(item: string): boolean {
  return judgment.run(item) === 'RegExp'
}

export function isDate(item: string): boolean {
  return judgment.run(item) === 'Date'
}

export function isArray(item: string): boolean {
  return judgment.run(item) === 'Array'
}
