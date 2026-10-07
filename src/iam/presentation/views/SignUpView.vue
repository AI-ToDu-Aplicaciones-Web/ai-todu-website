<script setup>
import RegisterForm from '../components/RegisterForm.vue';
import Card from 'primevue/card';
</script>

<template>
  <div class="flex justify-content-center align-items-center min-h-screen bg-gray-50">
    <Card class="w-full md:w-4 border-round shadow-2">
      <template #title>
        <h2 class="text-center m-0">Crea tu cuenta en Al ToDu</h2>
      </template>
      <template #content>
        <RegisterForm />
        <p class="text-center mt-4">¿Ya tienes cuenta? <a href="/sign-in">Inicia sesión</a></p>
      </template>
    </Card>
  </div>
</template>