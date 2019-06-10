import axios from 'axios';

export default {
  request(url, options) {
    return axios({ url, ...options });
  }
};
