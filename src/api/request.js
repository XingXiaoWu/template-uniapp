// import { Message } from 'element-ui'
import { Toast } from 'vant'
import axios from '@/utils/http'
// 移除默认拦截器
// axios.removeDefaultInterceptors()
// 兜底处理
const errorHandle = (error) => {
  // 处理错误,尝试获取error的message展示
  const { message } = error
  //   Message.error(message)
  Toast.fail(message)
}
axios.setErrorHandle(errorHandle)

// 业务自定义拦截器
axios.interceptors.request.use((config) => config)

axios.interceptors.response.use(
  (response) => {
    // 判断是否为blob类型
    if (response.config.responseType === 'blob') {
      return response
    }
    // 判断success是否为成功，兼容旧的不规范接口
    if (response.data.success || response.data.success === undefined) {
      return response
    }
    //   不是blob，且success不为true，意味着业务出错
    const error = new Error(response.data.msg || '')
    error.response = response.data || {}
    return Promise.reject(error)
  },
  (error) => Promise.reject(error),
)

export default axios
