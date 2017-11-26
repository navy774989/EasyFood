export const domain = "http://localhost:3000/";
export const baseURL = domain ;
const baseConfig = {
  method: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export default class FetchHelper {

  constructor() {}

  static Get(url, config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'GET' });
  }

  static Post(url, data = JSON.stringify({}) , config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'POST', body:  data });
  }

  static Put(url,data = JSON.stringify({}),config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'PUT', body: data  });
  }

  static Update(url, data = JSON.stringify({}), config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'PUT', body: data});
  }

  static Delete(url,data = JSON.stringify({}), config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'DELETE', body: data });
  }

  static wrapUrl(url) {
    if (url.indexOf('/') != 0) {
      return `/${url}`;
    } else {
      return url;
    }
  }
}