import axios from 'axios';

const request = axios.create({
  baseURL: 'http://viet.fresher.ameladev.click/api/',
});
export default request;
