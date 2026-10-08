import { PurchaseOrder } from '../domain/model/purchase-order.entity.js';


export class OrderAssembler {
    /**
     * Convierte un recurso del API en una entidad PurchaseOrder.
     */
    toEntityFromResource(resource) {
        // Asumiendo que tu entidad requiere un ID y un CustomerId
        const order = new PurchaseOrder({
            id: resource.id,
            customerId: resource.customerId
        });

        // Si el JSON viene con items, los agregamos
        if (resource.items && resource.items.length > 0) {
            order.addItemsFromCart(resource.items);
        }

        return order;
    }

    /**
     * Mapea un array de respuestas Axios a entidades.
     */
    toEntitiesFromResponse(response) {
        if (!response.data || !Array.isArray(response.data)) {
            return [];
        }
        return response.data.map(orderResource => {
            try {
                return this.toEntityFromResource(orderResource)
            } catch (error) {
                console.error('Error validando la orden:', error.message, orderResource)
                return null;
            }
        }).filter(order => order !== null)
    }
}