import { Product } from '../domain/model/product.entity.js';

export class CatalogApiService {
    /**
     * Retorna un listado mockeado de productos para poblar el catálogo en el frontend.
     */
    async getAllProducts() {
        const mockProducts = [
            {
                id: 'PROD-001',
                name: 'Teclado Mecánico Keychron',
                price: 120.50,
                imageUrl: 'https://placehold.co/400x300?text=Teclado'
            },
            {
                id: 'PROD-002',
                name: 'Monitor UltraWide LG',
                price: 350.00,
                imageUrl: 'https://placehold.co/400x300?text=Monitor'
            },
            {
                id: 'PROD-003',
                name: 'Mouse Logi Master 3S',
                price: 99.99,
                imageUrl: 'https://placehold.co/400x300?text=Mouse'
            }
        ];

        // Mapeamos los datos simulados hacia las entidades de dominio requeridas por la arquitectura
        return mockProducts.map(item => new Product({
            id: item.id,
            name: item.name,
            price: item.price,
            imageUrl: item.imageUrl
        }));
    }
}