import axios, { AxiosInstance } from 'axios'
import { envConfig } from '~/config/env.config'

const Calls = (): AxiosInstance => {
  const baseURL = envConfig.BASEURL
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      credentials: 'include',
    },
  })
}

const CallsWithBearer = (
  baseURL: string,
  authorization: string
): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${authorization}`,
    },
  })
}

export { Calls, CallsWithBearer }
