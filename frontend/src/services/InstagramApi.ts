import axios from 'axios';

const instagramApi = axios.create({
  // baseURL: 'https://www.instagram.com/'
  baseURL: 'https://api.github.com/'
});

export default instagramApi;


// async function getUser(username) {
//   try {
//     const response = await axios.get(`${username}?__a=1`);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }