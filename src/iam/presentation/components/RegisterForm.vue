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
    await iamStore.signUp(username.value, password.value);
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4 p-fluid">
    <div class="field">
      <label for="reg-username">Nuevo Usuario</label>
      <InputText id="reg-username" v-model="username" required />
    </div>
    <div class="field">
      <label for="reg-password">Contraseña</label>
      <Password id="reg-password" v-model="password" required toggleMask />
    </div>
    <Button type="submit" label="Registrarse" severity="success" class="mt-2" />
    <div v-if="iamStore.errors.length" class="text-red-500 text-sm mt-2">
      {{ iamStore.errors[0] }}
    </div>
  </form>
</template>