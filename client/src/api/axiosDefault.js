import axios from 'axios';

 //axios
 const axiosClient = axios.create({
    baseURL: '/user',
  });

  export default axiosClient