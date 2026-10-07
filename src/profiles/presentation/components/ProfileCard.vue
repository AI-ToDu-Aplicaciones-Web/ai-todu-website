<script setup>
import { computed } from 'vue';
import { profileStore } from '../../application/profileStore.js';
import Card from 'primevue/card';
import Button from 'primevue/button';

const profile = computed(() => profileStore.currentProfile);
const emit = defineEmits(['edit-profile']);
</script>

<template>
  <Card v-if="profile" class="w-full md:w-6 shadow-2 mx-auto mt-4">
    <template #title>
      <h2 class="m-0 text-primary">Perfil de Usuario</h2>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <div><strong>Nombre completo:</strong> {{ profile.fullName }}</div>
        <div><strong>Biografía:</strong> {{ profile.bio || 'Sin biografía' }}</div>
      </div>
    </template>
    <template #footer>
      <Button label="Editar Perfil" icon="pi pi-user-edit" @click="emit('edit-profile')" />
    </template>
  </Card>
  <div v-else class="text-center mt-4">
    <p>No se encontró información de perfil.</p>
    <Button label="Completar Perfil" icon="pi pi-plus" @click="emit('edit-profile')" />
  </div>
</template>