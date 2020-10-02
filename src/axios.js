import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-v1.herokuapp.com",
});

export default instance;
