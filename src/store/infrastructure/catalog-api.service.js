import http from '../../shared/infrastructure/http-common.js';
import { Product } from '../domain/model/product.entity.js';

export class CatalogApiService {
    /**
     * Obtiene los productos del Mock API y los convierte en entidades del dominio.
     */
    async getAllProducts() {
        try {
            const response = await http.get('/api/v1/products');

            // Actúa como un Assembler: mapea el JSON de infraestructura a tu entidad Product[cite: 20]
            return response.data.map(item => new Product({
                id: item.id,
                name: item.name,
                price: item.price,
                imageUrl: item.imageUrl
            }));
        } catch (error) {
            console.error("Error al obtener el catálogo:", error);
            throw error;
        }
    }
}