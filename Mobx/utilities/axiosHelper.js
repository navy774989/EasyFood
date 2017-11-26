import axios from 'axios';
export const domain = "http://172.104.53.69:3210";
export const baseURL = domain + "/api/";
const baseConfig = {
  method: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export default class AxiosHelper {

  constructor() {}

  static Get(url, config = baseConfig) {
    return axios(`${baseURL}${url}`, {...config, method: 'GET' });
  }

  static Post(url, data = {}, config = baseConfig) {
    return axios(`${baseURL}${url}`, {...config, method: 'POST', body: data });
  }

  static Put(url,config = baseConfig) {
    return axios(`${baseURL}${url}`, {...config, method: 'PUT' });
  }

  static Update(url, data = {}, config = baseConfig) {
    return axios(`${baseURL}${url}`, {...config, method: 'PUT', body: data });
  }

  static Delete(url, data = {}, config = baseConfig) {
    return axios(`${baseURL}${url}`, {...config, method: 'DELETE', body: data });
  }

  static wrapUrl(url) {
    if (url.indexOf('/') != 0) {
      return `/${url}`;
    } else {
      return url;
    }
  }
}