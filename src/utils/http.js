// uniapp对于vue2和vue3的promise转换
import './promiseTansform'

const defaultInterceptor = false
// 拦截器,先走这里的，再走外面的
uni.addInterceptor('request', {
  invoke(args) {
    // 请求拦截器
    console.log('请求拦截器1')
    console.log(`请求参数${args}`)
  },
  success(response) {
    // 成功拦截器
    console.log('成功拦截器1')
    console.log(`成功拦截器${response}`)
  },
  fail(err) {
    //   失败拦截器，非200也走成功
    console.log('失败拦截器1')
    console.log(`失败拦截器${err}`)
  },
  complete(res) {
    //   完成回调拦截
    console.log('完成拦截器1')
    console.log('interceptor-complete', res)
  },
})
// 失败处理
const failInterceptors = (error) => {
  if (!defaultInterceptor) {
    return {}
  }
  const tmp = error
  // 判断是否是前端请求直接挂了
  if (!error.response) {
    return Promise.reject(error)
  }
  // code 不为200出错
  // 有几种情况是不需要外抛的,直接此处处理
  const { status } = error.response
  // 401
  if (status === 401) {
    //   如果是web端，则跳转
    if (process.env.VUE_APP_PLATFORM === 'PCWEB') {
      window.location.href = `/login/?service=${encodeURIComponent(window.location.href)}`
    }
    return {}
  }
  // 403
  if (status === 403) {
    window.location.href = '/noAuth' // 无权限页面路由地址
    return {}
  }
  // 以下兼容某些后端团队，设置http status不正确，并返回response
  const errorMsg = error?.response?.data?.message || error?.response?.data?.msg || '服务端请求出错，请稍后重试！'
  const notFindMsg = error?.response?.data?.message || '请求地址错误！'
  if (status === 404) {
    tmp.message = notFindMsg
  } else {
    tmp.message = errorMsg
  }
  return Promise.reject(tmp)
}

// 设置错误统一处理
let errorHandle = null
const setErrorHandle = (handle) => {
  errorHandle = handle
}

// 删除拦截器
const removeDefaultInterceptors = () => {
  uni.removeInterceptor('request')
}

const GET = async (url, params, config = {}) => new Promise((resolve, reject) => {
  uni.request({
    method: 'GET',
    url,
    data: {
      ...params,
      noche: new Date().getTime(),
    },
    header: {
      ...config,
    },
  })
    .then((response) => {
      if (response.statusCode === 200) {
        resolve(response.data?.data ?? response.data)
      } else {
        const error = new Error(response.data.msg || '')
        error.response = response.data || {}
        failInterceptors(error)
        reject(error)
      }
    })
    .catch((error) => {
      if (errorHandle) { errorHandle(error) }
      return Promise.reject(error)
    })
})

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
