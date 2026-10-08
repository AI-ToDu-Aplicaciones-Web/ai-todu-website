<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-column min-h-screen">
    <!-- Barra de Navegación Global (Visible en toda la app) -->
    <header class="flex justify-content-between align-items-center py-3 px-5 shadow-1 fixed top-0 w-full bg-white z-5" role="banner">
      <div class="text-2xl font-bold text-primary flex align-items-center" aria-label="Logo Al ToDu">
        <i class="pi pi-check-circle mr-2" aria-hidden="true"></i>
        <router-link to="/" class="no-underline text-primary">Al ToDu</router-link>
      </div>

      <nav class="hidden md:flex gap-4 align-items-center" aria-label="Navegación principal">
        <router-link to="/" class="text-gray-700 no-underline hover:text-primary font-medium">Inicio</router-link>
        <router-link to="/tienda" class="text-gray-700 no-underline hover:text-primary font-medium">Tienda</router-link>
      </nav>

      <div class="flex align-items-center gap-3">
        <div class="p-toolbar-group-end">
          <LanguageSwitcher />
        </div>
        <router-link to="/login" class="p-button p-component p-button-primary no-underline font-bold border-round-lg">
          {{ t('nav.login') }}
        </router-link>
      </div>
    </header>

    <!-- Contenedor dinámico para las vistas (Landing, Tienda, etc.) con margen superior para no chocar con el header fijo -->
    <main class="flex-grow-1 mt-7">
      <router-view />
    </main>
  </div>
</template>