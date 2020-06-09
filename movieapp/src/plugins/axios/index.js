import axios from "axios";
import interceptors from './interceptors';
const instanse = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});
interceptors(instanse);
export default instanse;