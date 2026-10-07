<script setup>
import { ref, computed } from 'vue';
import { aiAssistantStore } from '../../application/ai-assistant.store.js';

// Estado local para el input del usuario
const userPrompt = ref('');

// Propiedades computadas enlazadas al Application Service (Store)
const isGenerating = computed(() => aiAssistantStore.isGenerating);
const currentSession = computed(() => aiAssistantStore.currentSession);
const errors = computed(() => aiAssistantStore.errors);

// Función para disparar el caso de uso
const handleGenerate = () => {
  if (userPrompt.value.trim().length === 0) return;
  aiAssistantStore.generateTaskBreakdown(userPrompt.value);
};

// Función para reiniciar
const handleReset = () => {
  userPrompt.value = '';
  aiAssistantStore.clearSession();
};
</script>

<template>
  <section id="ai-assistant" class="ai-section">
    <div class="ai-container">
      <div class="ai-header">
        <h2>Asistente de IA Al ToDu</h2>
        <p>Escribe una meta ambiciosa o un proyecto complejo y deja que nuestra IA lo desglose en tareas pequeñas y manejables.</p>
      </div>

      <div class="ai-interactive-area">
        <!-- Estado Inicial: Input -->
        <div v-if="!currentSession" class="prompt-box">
                    <textarea
                        v-model="userPrompt"
                        rows="4"
                        placeholder="Ejemplo: Quiero organizar una conferencia de tecnología para 100 personas..."
                        :disabled="isGenerating"
                        class="custom-textarea"
                    ></textarea>

          <button
              @click="handleGenerate"
              :disabled="isGenerating || userPrompt.trim().length === 0"
              class="btn-primary generate-btn"
          >
            <span v-if="isGenerating">Generando plan mágico... 🪄</span>
            <span v-else>Desglosar mi proyecto 🚀</span>
          </button>

          <!-- Mensajes de Error -->
          <div v-if="errors.length > 0" class="error-msg">
            <p v-for="err in errors" :key="err">❌ {{ err }}</p>
          </div>
        </div>

        <!-- Estado de Resultados -->
        <div v-else class="results-box">
          <h3>¡Aquí tienes tu plan de acción!</h3>
          <p class="original-prompt"><strong>Tu meta:</strong> "{{ currentSession.originalPrompt }}"</p>

          <div class="task-list">
            <!-- Iterando sobre los Value Objects de la Entidad -->
            <div v-for="(task, index) in currentSession.suggestedTasks" :key="index" class="task-card">
              <div class="task-header">
                <span class="task-number">{{ index + 1 }}</span>
                <h4>{{ task.title }}</h4>
              </div>
              <p>{{ task.description }}</p>
              <span class="task-time">⏱️ ~{{ task.estimatedMinutes }} min</span>
            </div>
          </div>

          <div class="results-actions">
            <button @click="handleReset" class="btn-secondary">Intentar con otra meta</button>
            <a href="/register" class="btn-primary">Guardar este plan en mi cuenta</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ai-section {
  padding: 5rem 5%;
  background-color: #f3f4f6; /* Un gris muy claro para diferenciar del Hero */
}

.ai-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  padding: 3rem;
}

.ai-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.ai-header h2 {
  font-size: 2.5rem;
  color: var(--primary-color, #4F46E5);
  margin-bottom: 1rem;
}

.custom-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1.1rem;
  resize: vertical;
  font-family: inherit;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}

.custom-textarea:focus {
  outline: none;
  border-color: var(--primary-color, #4F46E5);
}

.generate-btn {
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  border: none;
}

.generate-btn:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.task-card {
  border: 1px solid #e5e7eb;
  border-left: 4px solid var(--primary-color, #4F46E5);
  padding: 1.5rem;
  border-radius: 6px;
  background-color: #f9fafb;
}

.task-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.task-number {
  background-color: var(--primary-color, #4F46E5);
  color: white;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}

.task-header h4 {
  margin: 0;
  font-size: 1.1rem;
}

.task-time {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #4b5563;
  font-weight: 500;
}

.results-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.original-prompt {
  font-style: italic;
  color: #6b7280;
}

.error-msg {
  color: #dc2626;
  margin-top: 1rem;
  text-align: center;
}
</style>