<script setup>
import LoginForm from '../components/LoginForm.vue';
import Card from 'primevue/card';
</script>

<template>
  <div class="flex justify-content-center align-items-center min-h-screen bg-gray-50">
    <Card class="w-full md:w-4 border-round shadow-2">
      <template #title>
        <h2 class="text-center m-0">Bienvenido de nuevo</h2>
      </template>
      <template #content>
        <LoginForm />
        <p class="text-center mt-4">¿No tienes cuenta? <a href="/sign-up">Regístrate</a></p>
      </template>
    </Card>
  </div>
</template>