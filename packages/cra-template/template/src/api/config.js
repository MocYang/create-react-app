/**
 * @Author: yangqixin
 * @TIME: 2021/9/11 22:08
 * @FILE: config.js
 * @Email: 958292256@qq.com
 * @Description:
 */
export let urlNoMock = 'http://example.com/api/xxx'

let urlPrefix = ''

if (process.env.NODE_ENV) {
  urlPrefix = '/fake'
}

function processSlash(path, handlePrefix = true, handlePostfix = false) {
  if (handlePrefix) {
    return path.startsWith('/') ? path.slice(1, path.length) : path
  }

  if (handlePostfix) {
    return path.endsWith('/') ? path.slice(0, path.length - 1) : path
  }

  return path
}

export const addressConfig = {
  getXNoMock: `${urlNoMock}/api/xxx`, // url passthrough miragejs
  getXXX: `${urlPrefix}/api/xxx` // url intercept by miragejs
}
