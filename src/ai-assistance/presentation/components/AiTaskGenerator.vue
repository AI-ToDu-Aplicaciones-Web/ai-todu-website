<script setup>
import { ref, computed } from 'vue';
import { aiAssistantStore } from '../../application/aiAssistantStore.js';

const userPrompt = ref('');
const isGenerating = computed(() => aiAssistantStore.isGenerating);
const currentSession = computed(() => aiAssistantStore.currentSession);
const errors = computed(() => aiAssistantStore.errors);

const handleGenerate = () => {
  if (userPrompt.value.trim()) {
    aiAssistantStore.generateTaskBreakdown(userPrompt.value);
  }
};

const handleReset = () => {
  userPrompt.value = '';
  aiAssistantStore.clearSession();
};
</script>

<template>
  <section class="p-8 bg-gray-50 text-center">
    <h2 class="text-3xl font-bold mb-4 text-primary">Asistente Inteligente Al ToDu</h2>
    <p class="text-gray-600 mb-6 max-w-2xl mx-auto">Ingresa tu proyecto complejo y la IA lo dividirá en tareas manejables automáticamente.</p>

    <div class="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm text-left">
      <div v-if="!currentSession">
                <textarea
                    v-model="userPrompt"
                    rows="4"
                    class="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:border-primary"
                    placeholder="Ejemplo: Necesito organizar un evento corporativo para 50 personas..."
                    :disabled="isGenerating"
                ></textarea>

        <button
            @click="handleGenerate"
            :disabled="isGenerating || !userPrompt.trim()"
            class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
        >
          {{ isGenerating ? 'Generando tu plan de acción... 🪄' : 'Desglosar Proyecto 🚀' }}
        </button>

        <div v-for="err in errors" :key="err" class="text-red-500 mt-3 text-center">{{ err }}</div>
      </div>

      <div v-else>
        <div class="mb-5 p-4 bg-blue-50 border-l-4 border-primary rounded">
          <p class="text-sm text-gray-500 mb-1">Tu meta original:</p>
          <p class="font-medium italic">"{{ currentSession.originalPrompt }}"</p>
        </div>

        <div class="flex flex-col gap-4">
          <div v-for="(task, index) in currentSession.suggestedTasks" :key="index" class="p-4 border rounded-lg shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <span class="bg-primary text-white w-8 h-8 flex items-center justify-content-center rounded-full font-bold">{{ index + 1 }}</span>
              <h4 class="font-bold text-lg m-0">{{ task.title }}</h4>
            </div>
            <p class="text-gray-600 ml-11">{{ task.description }}</p>
            <span class="ml-11 mt-2 inline-block text-sm font-bold text-gray-500">⏱️ {{ task.estimatedMinutes }} min</span>
          </div>
        </div>

        <div class="mt-6 flex justify-content-between border-t pt-4">
          <button @click="handleReset" class="text-gray-500 hover:text-gray-800 font-medium">Volver a intentar</button>
          <button class="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Guardar Tareas</button>
        </div>
      </div>
    </div>
  </section>
</template>