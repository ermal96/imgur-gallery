import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.imgur.com/3/gallery",
    withCredentials: true,
    headers: {
        Authorization: 'Client-ID 29088592405784a',
    },
});

export default api;


