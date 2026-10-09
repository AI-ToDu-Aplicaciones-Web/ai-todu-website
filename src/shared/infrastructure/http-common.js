import axios from 'axios';


const http = axios.create({

    baseURL: 'https://6ac8853efd7c536b1bd9341b.mockapi.io/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default http;