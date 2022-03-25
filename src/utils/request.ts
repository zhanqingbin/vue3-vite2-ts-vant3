import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// 请求拦截器Do something before request is sent
request.interceptors.request.use(function (config) {
  // 统一设置用户身份
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如token过期无效、服务端异常等
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

// request不支持泛型 包装一下导出
export default <T=any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
