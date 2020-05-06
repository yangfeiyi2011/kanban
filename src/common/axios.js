import axios from 'axios'
axios.defaults.withCredentials = true

export function request(config) {
  const instrance = axios.create({
    // baseURL: 'http://10.203.71.4:8089',
    baseURL: 'http://127.0.0.1:5000',
    timeout: 5000
  })
  return instrance(config)
}