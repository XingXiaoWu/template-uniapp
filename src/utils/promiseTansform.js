// 在 main.js 中写入以下代码即可
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res
    }
    return new Promise((resolve, reject) => {
      res.then((response) => {
        if (response[0]) {
          reject(response[0])
        } else {
          resolve(response[1])
        }
      })
    })
  },
})
