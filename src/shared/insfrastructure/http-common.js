import axios from 'axios';
import { errorInterceptor } from './errorInterceptor.js';

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: { 'Content-Type': 'application/json' }
});

// Se registra el interceptor global para manejar errores de red de forma consistente
http.interceptors.response.use(response => response, errorInterceptor);

export default http;