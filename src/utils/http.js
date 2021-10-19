/* eslint-disable import/no-extraneous-dependencies */
// 由于@moedu/axios引用了axios，项目中没必要再次引用，因此此处忽略
import axios from '@moedu/axios'
import settle from 'axios/lib/core/settle'
import buildURL from 'axios/lib/helpers/buildURL'

// 自定义适配器 ， 适配uniapp语法
// #ifdef MP-WEIXIN
axios.defaults.adapter = (config) => new Promise((resolve, reject) => {
  uni.request({
    method: config.method.toUpperCase(),
    url: process.env.VUE_APP_MP_WEIXIN_DOAMIN
    + config.baseURL
    + buildURL(config.url, config.params, config.paramsSerializer),
    header: config.headers,
    data: config.data,
    dataType: config.dataType,
    responseType: config.responseType,
    sslVerify: config.sslVerify,
    complete: function complete(response) {
      const result = {
        data: response.data,
        status: response.statusCode,
        errMsg: response.errMsg,
        header: response.header,
        config,
      }
      settle(resolve, reject, result)
    },
  })
})
// #endif
export default axios
