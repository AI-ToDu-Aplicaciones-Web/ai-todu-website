<script setup>
import ProductCatalog from './ProductCatalog.vue';
import ShoppingCart from './ShoppingCart.vue';
</script>

<template>
  <div class="grid gap-3 p-4">
    <!-- Catálogo de productos ocupando la mayor parte de la pantalla -->
    <div class="col-12 lg:col-8">
      <ProductCatalog />
    </div>

    <!-- Carrito de compras en el lateral derecho -->
    <div class="col-12 lg:col-4">
      <!-- 'sticky' mantiene el carrito a la vista mientras el usuario hace scroll en el catálogo -->
      <div class="sticky top-0 pt-4">
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>