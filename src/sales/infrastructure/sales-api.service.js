import axios from "axios"
import { errorInterceptor } from "@/shared/infrastructure/error.interceptor.js"

/**
 * Instancia de Axios configurada para el Mock API.
 * Aisla los detalles de transporte de las capas superiores[cite: 27].
 */
const http = axios.create({

    baseURL: 'http://localhost:3000/api/v1',
headers: {
    'Content-Type': 'application/json'
}
});

// Agregamos el interceptor de respuestas
http.interceptors.response.use(errorInterceptor.onResponse, errorInterceptor.onError)

export class SalesApiService {
    /**
     * Envía la orden de compra procesada al Mock API.
     * @param {Object} payload - La orden mapeada a formato JSON.
     */
    createPurchaseOrder(payload) {
        return http.post('/orders', payload)
    }

    /**
     * Obtiene el historial de órdenes.
     */
    getOrders() {
        return http.get('/orders')
    }
}