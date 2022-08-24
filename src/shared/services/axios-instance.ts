import Axios from 'axios';
import {API_URL} from 'react-native-dotenv';

/**
 * Create Axios Instance
 */
const axiosInstance = Axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export default axiosInstance;
