import axios from 'axios';
import {
  message,
} from 'antd';

const methods = ['get', 'post', 'put', 'delete'];

const http = function ({ method = 'get', url, data, headers }) {
  return axios({
    method,
    url,
    data,
    headers,
    baseURL: 'http://192.168.100.228:8124'
  })
    .then((res) => {
      console.log(res.data, 222);
      return res.data
    })
    .then((res) => {
      const { status, message: mes } = res;
      if (status !== 0) {
        throw message.error(mes);
      }
      return res
    })
};

methods.forEach(method => {
  http[method] = function (url, data, headers) {
    return http({ method, url, data, headers })
  }
});

window.http = http;
