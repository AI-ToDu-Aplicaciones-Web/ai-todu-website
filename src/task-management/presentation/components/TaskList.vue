<script setup>
import { onMounted } from 'vue';
import { taskStore } from '../../application/taskStore.js';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

onMounted(() => {
  taskStore.fetchTasks();
});

const completeTask = async (task) => {
  await taskStore.markAsCompleted(task);
};

const getStatusSeverity = (status) => {
  if (status === 'completed') return 'success';
  if (status === 'in-progress') return 'warning';
  return 'info';
};
</script>

<template>
  <div class="bg-white p-4 rounded-xl shadow-sm border mt-4">
    <h3 class="font-bold text-xl text-primary mb-3">Tus Tareas</h3>
    <DataTable :value="taskStore.tasks" :paginator="true" :rows="5" responsiveLayout="scroll">
      <Column field="title" header="Título" :sortable="true"></Column>
      <Column field="status" header="Estado">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getStatusSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column header="Acciones">
        <template #body="slotProps">
          <Button
              icon="pi pi-check"
              class="p-button-rounded p-button-success p-button-text"
              @click="completeTask(slotProps.data)"
              :disabled="slotProps.data.isCompleted()"
              v-tooltip="'Completar'" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>