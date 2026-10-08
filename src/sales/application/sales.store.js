import { reactive } from 'vue';
import { PurchaseOrder } from '../domain/model/purchase-order.entity.js';
import { cartStore } from '../../store/application/cart.store.js';

export const salesStore = reactive({
    orders: [],
    errors: [],
    isLoading: false,

    async processCheckout(customerId) {
        this.isLoading = true;
        this.errors = [];

        try {
            // 1. Instanciamos la entidad del dominio
            const order = new PurchaseOrder({
                id: crypto.randomUUID(), // Generamos un ID temporal
                customerId
            });

            // 2. Aplicamos reglas de negocio
            order.addItemsFromCart(cartStore.items);
            order.submit();

            // (Aquí conectaremos con SalseApiService para mandar el POST a Azure)

            // 3. Guardamos localmente y limpiamos el carrito
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