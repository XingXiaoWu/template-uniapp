/* 代理配置 */
const proxy = {
  '/ecp.sso.backend': {
    target: 'https://dev.api.ckmooc.com',
    headers: {
      'uniedu-sso-token': process.env.VUE_APP_TOKEN,
    },
  },
  '/ecp.user.backend': {
    pathRewrite: { '/api/ecp.user.backend': '/' },
    target: 'http://47.104.3.251:8001/mock/113',
  },
}
// 打印映射地址
Object.keys(proxy).forEach((path) => {
  console.log(`${path} => ${proxy[path].target} ${proxy[path].pathRewrite ? `-->${JSON.stringify(proxy[path].pathRewrite)}` : ''}`)
})

module.exports = proxy
