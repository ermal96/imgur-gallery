import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.imgur.com/3/gallery",
    withCredentials: true,
    headers: {
        Authorization: 'Client-ID 7cd25083e07b05d',
    },
});

export default api;


