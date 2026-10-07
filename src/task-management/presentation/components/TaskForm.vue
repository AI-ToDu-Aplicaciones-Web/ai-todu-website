<script setup>
import { ref } from 'vue';
import { taskStore } from '../../application/taskStore.js';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';

const title = ref('');
const description = ref('');
const dueDate = ref(null);
const emit = defineEmits(['task-added']);

const submitTask = async () => {
  if (title.value) {
    await taskStore.addTask({
      title: title.value,
      description: description.value,
      status: 'pending',
      dueDate: dueDate.value
    });
    title.value = '';
    description.value = '';
    dueDate.value = null;
    emit('task-added');
  }
};
</script>

<template>
  <form @submit.prevent="submitTask" class="p-fluid flex flex-col gap-4 bg-white p-5 rounded-xl shadow-sm border">
    <h3 class="font-bold text-xl text-primary m-0">Nueva Tarea</h3>
    <div class="field">
      <label for="title">Título</label>
      <InputText id="title" v-model="title" required placeholder="Ej: Configurar Bounded Context" />
    </div>
    <div class="field">
      <label for="desc">Descripción</label>
      <Textarea id="desc" v-model="description" rows="3" />
    </div>
    <div class="field">
      <label for="due">Fecha de Vencimiento</label>
      <Calendar id="due" v-model="dueDate" showIcon />
    </div>
    <Button type="submit" label="Crear Tarea" icon="pi pi-plus" :loading="taskStore.isLoading" />
  </form>
</template>