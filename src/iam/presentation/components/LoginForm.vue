<script setup>
import { ref } from 'vue';
import { iamStore } from '../../application/iam_store.js';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

const username = ref('');
const password = ref('');

const submitForm = async () => {
  if (username.value && password.value) {
    await iamStore.signIn(username.value, password.value);
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4 p-fluid">
    <div class="field">
      <label for="username">Usuario</label>
      <InputText id="username" v-model="username" required />
    </div>
    <div class="field">
      <label for="password">Contraseña</label>
      <Password id="password" v-model="password" :feedback="false" required toggleMask />
    </div>
    <Button type="submit" label="Iniciar Sesión" class="mt-2" />
    <div v-if="iamStore.errors.length" class="text-red-500 text-sm mt-2">
      {{ iamStore.errors[0] }}
    </div>
  </form>
</template>