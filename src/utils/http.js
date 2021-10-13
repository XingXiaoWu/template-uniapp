// uniapp对于vue2和vue3的promise转换
import './promiseTansform'
// 拦截器
uni.addInterceptor('request', {
  invoke(args) {
    // 请求拦截器
    console.log(args)
    console.log('请求拦截器1')
  },
  success(response) {
    // 成功拦截器
    console.log(response)
    console.log('成功拦截器1')
    // args.data.code = 1
  },
  fail(err) {
    //   失败拦截器
    console.log('失败拦截器1')
    console.log('interceptor-fail', err)
  },
  complete(res) {
    //   完成回调拦截
    console.log('完成拦截器1')
    console.log('interceptor-complete', res)
  },
})

// 设置错误统一处理
let errorHandle = null
const setErrorHandle = (handle) => {
  errorHandle = handle
}

// 删除拦截器
const removeDefaultInterceptors = () => {
  uni.removeInterceptor('request')
}

const GET = async (url, params, config = {}) => {
  try {
    const response = await uni.request({
      method: 'GET',
      url: 'https://www.example.com/request',
      data: {
        ...params,
        noche: new Date().getTime(),
      },
      header: {
        ...config,
      },
    })
    return Promise.resolve(response.data?.data ?? response.data)
  } catch (error) {
    if (errorHandle) { errorHandle(error) }
    return Promise.reject(error)
  }
//     .then((res) => { // 此处即为 success 回调中的 res
//       console.log(res.data)
//     })
//     .catch((err) => { // 此处即为 fail 回调中的 err
//       console.error(err)
//     })
//   return uni.request()
}

export default {
  setErrorHandle,
  removeDefaultInterceptors,
  GET,
}

// const baseUrl = 'http://localhost:8080'
// const request = (options = {}) => new Promise((resolve, reject) => {
//   uni
//     .request({
//       url: baseUrl + options.url || '',
//       method: options.type || 'GET',
//       data: options.data || {},
//       header: options.header || {},
//     })
//     .then((data) => {
//       const res = data
//       resolve(res)
//     })
//     .catch((error) => {
//       reject(error)
//     })
// })

// const get = (url, data, options = {}) => {
//   const reqOpt = options
//   reqOpt.type = 'GET'
//   reqOpt.data = data
//   reqOpt.url = url
//   return request(reqOpt)
// }

// const post = (url, data, options = {}) => {
//   const reqOpt = options
//   reqOpt.type = 'POST'
//   reqOpt.data = data
//   reqOpt.url = url
//   return request(reqOpt)
// }

// export default {
//   request,
//   get,
//   post,
// }
