import axios from "axios";

const api = axios.create({
  baseURL: "https://todofull-bjrz.onrender.com/api",
  withCredentials: true,
});

export default api;
