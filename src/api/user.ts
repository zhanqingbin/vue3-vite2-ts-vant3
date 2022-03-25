import request from '@/utils/request'
import { ILoginInfo } from './types/user'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/'
  })
}

export default null
