export class SalesApiService {
    /**
     * Simula el envío de la orden de compra hacia el servidor.
     * @param {Object} payload - Estructura de datos de la orden procesada.
     */
    async createPurchaseOrder(payload) {
        console.log("Enviando orden a la API simulada:", payload);

        // Simulamos una latencia de red de 500ms y un registro exitoso
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