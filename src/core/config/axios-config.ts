import axios, { type AxiosInstance } from 'axios'
import { backConfig } from './host'

export const getAxiosIns = (): AxiosInstance => {  
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${backConfig.apiKey}`
    },
    baseURL: `${backConfig.host}/api`,
    timeout: 40000
  })
}
