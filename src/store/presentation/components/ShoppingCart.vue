<script setup>
import { cartStore } from '../application/cart.store.js';
import { salesStore } from '../../sales/application/sales.store.js';

// ID temporal para simular la sesión del cliente
const currentCustomerId = "CUST-001";

const checkout = async () => {
  try {
    await salesStore.processCheckout(currentCustomerId);
    alert("¡Orden procesada y enviada a Azure con éxito!");
  } catch (error) {
    alert("Error procesando la orden: " + error.message);
  }
};
</script>

<template>
  <div class="p-4 border-round-xl shadow-2 surface-card">
    <h2 class="text-2xl font-bold mb-4 text-gray-900">Tu Carrito</h2>

    <div v-if="cartStore.items.length === 0" class="text-gray-500 text-center py-4">
      <i class="pi pi-shopping-cart text-4xl mb-2"></i>
      <p>El carrito está vacío.</p>
    </div>

    <div v-else>
      <ul class="list-none p-0 m-0 mb-4">
        <li v-for="item in cartStore.items" :key="item.product.id" class="flex justify-content-between align-items-center mb-3 border-bottom-1 border-gray-200 pb-2">
          <div>
            <span class="font-bold mr-2">{{ item.quantity }}x</span>
            <span class="text-gray-700">{{ item.product.name }}</span>
          </div>
          <div class="flex align-items-center gap-3">
            <span class="font-bold">${{ (item.product.price * item.quantity).toFixed(2) }}</span>
            <button class="p-button p-component p-button-text p-button-danger p-0" @click="cartStore.removeItem(item.product.id)">
              <i class="pi pi-trash"></i>
            </button>
          </div>
        </li>
      </ul>

      <div class="flex justify-content-between text-xl font-bold mb-4">
        <span>Total:</span>
        <span class="text-primary">${{ cartStore.totalAmount.toFixed(2) }}</span>
      </div>

      <button
          class="p-button p-component p-button-success w-full justify-content-center font-bold"
          :disabled="salesStore.isLoading"
          @click="checkout"
      >
        {{ salesStore.isLoading ? 'Procesando en Azure...' : 'Finalizar Compra' }}
      </button>
    </div>
  </div>
</template>