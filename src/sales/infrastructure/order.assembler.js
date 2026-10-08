import { PurchaseOrder } from '../domain/model/purchase-order.entity.js';

export class OrderAssembler {
    /**
     * Mapea una respuesta completa de Axios que contiene los recursos en un array de entidades[cite: 26].
     */
    toEntitiesFromResponse(response) {
        if (!response.data) return [];

        return response.data.map(orderResource => {
            try {
                return this.toEntityFromResource(orderResource);
            } catch (error) {
                console.error('Validation error for order:', error.message, orderResource);
                return null;
            }
        }).filter(order => order !== null);
    }

    /**
     * Mapea un único recurso en una entidad del dominio.
     */
    toEntityFromResource(resource) {
        const order = new PurchaseOrder({
            id: resource.id,
            customerId: resource.customerId
        });

        if (resource.items && resource.items.length > 0) {
            order.addItemsFromCart(resource.items);
        }

        return order;
    }
}