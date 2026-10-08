import { reactive } from 'vue';
import { PurchaseOrder } from '../domain/model/purchase-order.entity.js';
import { cartStore } from '../../store/application/cart.store.js';
import { SalesApiService } from '../infrastructure/sales-api.service.js';

const salesApi = new SalesApiService();

export const salesStore = reactive({
    orders: [],
    errors: [],
    isLoading: false,

    async processCheckout(customerId) {
        this.isLoading = true;
        this.errors = [];

        try {
            const order = new PurchaseOrder({
                id: crypto.randomUUID(),
                customerId
            });

            order.addItemsFromCart(cartStore.items);
            order.submit();

            // Llamada real a la capa de infraestructura
            await salesApi.createPurchaseOrder(order);

            this.orders.push(order);
            cartStore.clearCart();

            return order;
        } catch (error) {
            this.errors.push(error.message);
            throw error;
        } finally {
            this.isLoading = false;
        }
    }
});