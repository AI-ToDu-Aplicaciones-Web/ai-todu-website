<script setup>
import RegisterForm from '../components/RegisterForm.vue';
import Card from 'primevue/card';
</script>

<template>
  <div class="flex justify-content-center align-items-center min-h-screen bg-gray-50 px-3 py-5">
    <Card class="w-full sm:w-9 md:w-6 lg:w-5 border-round-xl shadow-3 bg-gray-900 text-white">
      <template #title>
        <h2 class="text-center font-bold m-0 text-3xl text-white">Crea tu cuenta</h2>
        <p class="text-center text-gray-400 text-sm mt-2 font-normal">Comienza a organizar tu tiempo con Al ToDu</p>
      </template>
      <template #content>
        <div class="mt-4">
          <RegisterForm />
        </div>
        <div class="text-center mt-5">
          <span class="text-gray-400">¿Ya tienes cuenta? </span>
          <router-link to="/sign-in" class="font-bold text-primary no-underline hover:underline">Inicia sesión</router-link>
        </div>
      </template>
    </Card>
  </div>
</template>