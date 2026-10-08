import axios from 'axios';


const http = axios.create({

    baseURL: 'https://tu-mock-api-azure.azure-api.net',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default http;