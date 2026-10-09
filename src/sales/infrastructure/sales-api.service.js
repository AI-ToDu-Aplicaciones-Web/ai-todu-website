import http from '../../shared/infrastructure/http-common.js';

export class SalesApiService {

    async getProducts() {
        const response = await http.get('/products');
        return response.data;
    }


    async updateProductStock(id, productData) {
        const response = await http.put(`/products/${id}`, productData);
        return response.data;
    }


    async createPurchaseOrder(payload) {
        console.log("Enviando orden a la API simulada:", payload);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: 201,
                    data: { success: true, message: "Orden procesada con éxito", order: payload }
                });
            }, 500);
        });
    }
}