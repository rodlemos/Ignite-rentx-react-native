import axios from "axios";

const api = axios.create({
  baseURL: //"your_IP_address:3333"
});

export default api;