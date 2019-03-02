var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://localhost:8090',
});

export default axiosInstance;