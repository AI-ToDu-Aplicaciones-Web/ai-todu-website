<script setup>
import LoginForm from '../components/LoginForm.vue';
import Card from 'primevue/card';
</script>

<template>
  <div class="flex justify-content-center align-items-center min-h-screen bg-gray-50 px-3">
    <Card class="w-full sm:w-8 md:w-5 lg:w-4 border-round-xl shadow-3 bg-gray-900 text-white">
      <template #title>
        <h2 class="text-center font-bold m-0 text-3xl text-white">Bienvenido de nuevo</h2>
        <p class="text-center text-gray-400 text-sm mt-2 font-normal">Ingresa a tu cuenta de Al ToDu</p>
      </template>
      <template #content>
        <div class="mt-4">
          <LoginForm />
        </div>
        <div class="text-center mt-5">
          <span class="text-gray-400">¿No tienes cuenta? </span>
          <router-link to="/sign-up" class="font-bold text-primary no-underline hover:underline">Regístrate</router-link>
        </div>
      </template>
    </Card>
  </div>
</template>