var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://localhost:8090',
});

module.exports = axiosInstance;