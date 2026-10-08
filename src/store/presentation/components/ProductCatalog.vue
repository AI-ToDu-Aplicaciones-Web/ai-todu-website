<script setup>
import { ref, onMounted } from 'vue';
import { CatalogApiService } from '../infrastructure/catalog-api.service.js';
import { cartStore } from '../application/cart.store.js';

const products = ref([]);
const catalogApi = new CatalogApiService();

onMounted(async () => {
  try {
    products.value = await catalogApi.getAllProducts();
  } catch (error) {
    console.error("No se pudo cargar el catálogo", error);
  }
});

const addToCart = (product) => {
  cartStore.addItem(product, 1);
};
</script>

<template>
  <div class="grid gap-4">
    <div v-for="product in products" :key="product.id" class="col-12 md:col-4">
      <div class="p-4 border-round-xl shadow-2 bg-white text-center h-full flex flex-column justify-content-between">
        <div>
          <img :src="product.imageUrl" :alt="product.name" class="w-full border-round mb-3" v-if="product.imageUrl" />
          <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
        </div>
        <div>
          <p class="text-2xl text-primary font-bold mb-3">${{ product.price }}</p>
          <button class="p-button p-component p-button-primary w-full justify-content-center font-bold" @click="addToCart(product)">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>