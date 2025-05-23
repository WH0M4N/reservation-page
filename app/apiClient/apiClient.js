const { default: axios } = require("axios");

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 6000,
});

export default apiClient;
