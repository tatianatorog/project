import axios from 'axios';


/** base url to make request to the user Api */
const instance = axios.create({
  baseURL: 'http://localhost:8010/api/v1/customerdata/',
});

export default instance;
