<script setup>
import { ref } from 'vue';
import { iamStore } from '../../application/iam_store.js';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

const username = ref('');
const password = ref('');
const fullName = ref('');

const submitForm = async () => {
  if (username.value && password.value) {
    // Ajusta esta llamada según el método de tu IAM store para registrarse
    await iamStore.signUp(username.value, password.value, fullName.value);
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-column gap-4 p-fluid">
    <div class="flex flex-column gap-2">
      <label for="fullName" class="font-medium text-gray-300">Nombre Completo</label>
      <InputText id="fullName" v-model="fullName" required class="w-full" placeholder="Ej. Carlos Bernal" />
    </div>

    <div class="flex flex-column gap-2">
      <label for="username" class="font-medium text-gray-300">Usuario / Correo</label>
      <InputText id="username" v-model="username" required class="w-full" placeholder="usuario@upc.edu.pe" />
    </div>

    <div class="flex flex-column gap-2">
      <label for="password" class="font-medium text-gray-300">Contraseña</label>
      <Password id="password" v-model="password" :feedback="false" required toggleMask class="w-full" inputClass="w-full" />
    </div>

    <Button type="submit" label="Registrarse" class="w-full font-bold justify-content-center mt-3" />

    <div v-if="iamStore.errors.length" class="text-red-400 text-sm mt-2 text-center">
      {{ iamStore.errors[0] }}
    </div>
  </form>
</template>