import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/', //base url path
});

export default instance;