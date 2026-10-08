import http from '../../shared/infrastructure/http-common.js';

export class SalesApiService {
    /**
     * Envía la orden de compra procesada al backend en Azure.
     * @param {PurchaseOrder} purchaseOrder - La entidad de dominio validada.
     */
    async createPurchaseOrder(purchaseOrder) {
        // Mapeamos la entidad de dominio al formato JSON que espera el API
        const payload = {
            orderId: purchaseOrder.id,
            customerId: purchaseOrder._customerId,
            status: purchaseOrder.status,
            items: purchaseOrder.items.map(item => ({
                productId: item.product.id,
                quantity: item.quantity,
                unitPrice: item.product.price
            })),
            totalAmount: purchaseOrder.calculateTotal()
        };

        try {
            const response = await http.post('/api/v1/orders', payload);
            return response.data;
        } catch (error) {
            console.error("Error al registrar la venta en Azure:", error);
            throw error;
        }
    }
}