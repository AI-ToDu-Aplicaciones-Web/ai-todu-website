import { reactive } from 'vue';
import { PurchaseOrder } from '../domain/model/purchase-order.entity.js';
import { cartStore } from '../../store/application/cart.store.js';
import { SalesApiService } from '../infrastructure/sales-api.service.js';

const salesApi = new SalesApiService();

export const salesStore = reactive({
    products: [],      // <--- Catálogo obtenido de la MockAPI
    orders: [],
    errors: [],
    isLoading: false,

    // Cargar productos desde la MockAPI (/products)
    async fetchProducts() {
        this.isLoading = true;
        this.errors = [];
        try {
            this.products = await salesApi.getProducts();
        } catch (error) {
            this.errors.push("Error al cargar los productos del catálogo.");
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    },

    // Procesar checkout, guardar orden y actualizar stock en MockAPI
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

            // 1. Guardar la orden (simulada o en API si agregaste el recurso)
            await salesApi.createPurchaseOrder(order);

            // 2. Actualizar el stock de cada producto comprado en la MockAPI
            for (const item of cartStore.items) {
                // Buscamos el producto correspondiente en el estado o usamos su ID
                const product = this.products.find(p => p.id === item.id);
                if (product) {
                    const newStock = Math.max(0, (product.stock || 10) - item.quantity);
                    await salesApi.updateProductStock(product.id, { ...product, stock: newStock });
                }
            }

            this.orders.push(order);
            cartStore.clearCart();

            // Refrescamos los productos para mostrar el stock actualizado
            await this.fetchProducts();

            return order;
        } catch (error) {
            this.errors.push(error.message || "Error al procesar la compra.");
            throw error;
        } finally {
            this.isLoading = false;
        }
    }
});