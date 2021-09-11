import { createServer } from 'miragejs'

// 不想被 migrate 拦截的请求
let urlPassthrough = ''

export function makeServer({ environment }) {
  createServer({
    environment,

    routes() {
      // this.namespace = '/fake'
      this.timing = 1000

      /**
       * mockAPI可以像这样，在下面添加路由配置, 这样，实际的请求路径为：/fake/api/xxx/xxx。
       * 也就是，所有带 `/fake`前缀的请求，都将走 migratejs 的 mock 服务。其它没有这个前缀的。走正常请求
       * this.get('/api/xxx/xxx',(schema, request) => {
       *   return {
       *     "code": 1,
       *     "msg": "success",
       *     "data": []
       *   }
       * })
       */

      // add white list.
      this.passthrough(urlPassthrough + '/**')
    }
  })
}
