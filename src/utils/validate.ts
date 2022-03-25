/**
 * @description 外部链接
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path:string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description 地址
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL (url:string) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @description 小写
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase (str:string) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @description 大写
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase (str:string) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @description 字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets (str:string) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @description 邮箱地址
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail (email:string) {
  // eslint-disable-next-line no-useless-escape
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}
