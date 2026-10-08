<script setup>
import { ref, onMounted } from 'vue';
import { profileStore } from '../../application/profileStore.js';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const props = defineProps({
  userId: { type: String, required: true }
});

const emit = defineEmits(['saved']);

const firstName = ref('');
const lastName = ref('');
const bio = ref('');

onMounted(() => {
  if (profileStore.currentProfile) {
    firstName.value = profileStore.currentProfile.firstName;
    lastName.value = profileStore.currentProfile.lastName;
    bio.value = profileStore.currentProfile.bio;
  }
});

const submitForm = async () => {
  const profileData = {
    userId: props.userId,
    firstName: firstName.value,
    lastName: lastName.value,
    bio: bio.value
  };
  await profileStore.saveProfile(profileData);
  if (profileStore.errors.length === 0) {
    emit('saved');
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-column gap-4 p-fluid max-w-lg mx-auto mt-4 bg-white p-5 border-round-xl shadow-2">
    <h3 class="text-xl font-bold mb-2 text-primary text-center">Información Personal</h3>

    <div class="flex flex-column gap-2">
      <label for="firstName" class="font-medium text-gray-700">Nombre</label>
      <InputText id="firstName" v-model="firstName" required class="w-full" />
    </div>

    <div class="flex flex-column gap-2">
      <label for="lastName" class="font-medium text-gray-700">Apellido</label>
      <InputText id="lastName" v-model="lastName" required class="w-full" />
    </div>

    <div class="flex flex-column gap-2">
      <label for="bio" class="font-medium text-gray-700">Biografía (opcional)</label>
      <Textarea id="bio" v-model="bio" rows="4" class="w-full" />
    </div>

    <Button
        type="submit"
        :label="profileStore.isLoading ? 'Guardando...' : 'Guardar Perfil'"
        :disabled="profileStore.isLoading"
        class="w-full mt-2 font-bold justify-content-center"
    />

    <div v-if="profileStore.errors.length" class="text-red-500 mt-2 text-sm text-center">
      {{ profileStore.errors[0] }}
    </div>
  </form>
</template>