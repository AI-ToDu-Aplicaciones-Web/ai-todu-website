import axios from 'axios';
import { errorInterceptor } from '../../shared/infrastructure/error.interceptor.js';

const http = axios.create({

    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.response.use(errorInterceptor.onResponse, errorInterceptor.onError);

export class SalesApiService {
    createPurchaseOrder(payload) {
        return http.post('/orders', payload);
    }

    getOrders() {
        return http.get('/orders');
    }
}