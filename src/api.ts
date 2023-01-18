import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.imgur.com/3/gallery",
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: 'Client-ID c6b6d7b0c7419e5',
    },
});

export default api;