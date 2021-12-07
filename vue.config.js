const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
// uniapp不支持配置publicPath，如果需要配置，请在 manifest.json->h5->router->base 中配置
//   publicPath: './',
// 固定 false
  runtimeCompiler: false,
//   assetsDir 固定 static
  assetsDir: 'static',
  lintOnSave: 'default',
//   productionSourceMap 固定 false
  productionSourceMap: false,
  transpileDependencies:['@dcloudio/uni-ui']
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': resolve('src'),
  //     },
  //   },
  // },
}
