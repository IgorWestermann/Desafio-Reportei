const axios = require("axios");

const api = axios.create({
  baseURL: "https://www.instagram.com",
});
module.exports = api;
