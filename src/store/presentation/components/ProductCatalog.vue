<script setup>
import { onMounted } from 'vue';
import { salesStore } from '../../../sales/application/sales.store.js';
import { cartStore } from '../../application/cart.store.js';

onMounted(async () => {
  try {
    await salesStore.fetchProducts();
  } catch (error) {
    console.error("No se pudo cargar el catálogo desde la API", error);
  }
});

const addToCart = (product) => {
  cartStore.addItem(product, 1);
};
</script>

<template>
  <div class="grid gap-4">
    <!-- Mensaje de carga o si está vacío -->
    <div v-if="salesStore.isLoading" class="col-12 text-center text-gray-500 font-bold">
      Cargando productos desde la nube...
    </div>

    <!-- Mapeo dinámico de los productos de la MockAPI -->
    <div v-for="product in salesStore.products" :key="product.id" class="col-12 md:col-4">
      <div class="p-4 border-round-xl shadow-2 bg-white text-center h-full flex flex-column justify-content-between">
        <div>
          <!-- Si el producto de MockAPI no tiene imagen, mostramos una por defecto o la que tenga -->
          <img :src="product.imageUrl || 'https://placehold.co/400x300?text=Producto'" :alt="product.name" class="w-full border-round mb-3" />
          <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
          <p class="text-sm text-gray-600 mb-2" v-if="product.description">{{ product.description }}</p>
        </div>
        <div>
          <p class="text-2xl text-primary font-bold mb-2">${{ product.price }}</p>
          <p class="text-xs text-gray-500 mb-3">Stock disponible: {{ product.stock ?? 'N/D' }}</p>
          <button class="p-button p-component p-button-primary w-full justify-content-center font-bold" @click="addToCart(product)">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>

    <div v-if="!salesStore.isLoading && salesStore.products.length === 0" class="col-12 text-center text-gray-500">
      No hay productos registrados en la base de datos.
    </div>
  </div>
</template>