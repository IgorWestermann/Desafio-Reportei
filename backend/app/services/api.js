// import axios from 'axios'
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
const axios = require("axios");

const api = axios.create({
  baseURL: "https://www.instagram.com",
});
module.exports = api;
