import Vue from 'vue'

const componentsContext = require.context('./', true, /index.(vue|js)$/)
componentsContext.keys().forEach((fileName) => {
  // 获取文件中的 default 模块
  const componentConfig = componentsContext(fileName).default
  if (/.vue$/.test(fileName)) {
    console.log(componentConfig.name)
    Vue.component(componentConfig.name, componentConfig)
  } else {
    Vue.use(componentConfig)
  }
})
