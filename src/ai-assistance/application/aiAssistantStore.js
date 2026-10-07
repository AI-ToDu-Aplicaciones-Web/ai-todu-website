import { reactive } from 'vue';
import { AiAssistantApi } from '../infrastructure/ai-assistant-api.js';
import { AiAssistantAssembler } from '../infrastructure/ai-assistant.assembler.js';

const api = new AiAssistantApi();

export const aiAssistantStore = reactive({
    currentSession: null,
    isGenerating: false,
    errors: [],

    async generateTaskBreakdown(promptText) {
        this.isGenerating = true;
        this.errors = [];
        this.currentSession = null;

        try {
            // Simulamos un pequeño retraso de red para la UX
            await new Promise(resolve => setTimeout(resolve, 1000));

            const response = await api.generateTasks(promptText);
            const sessionEntity = AiAssistantAssembler.toEntityFromResource(response.data);

            if (sessionEntity) {
                this.currentSession = sessionEntity;
            } else {
                throw new Error("No se pudo estructurar la respuesta.");
            }
        } catch (error) {
            console.error(error);
            this.errors.push("Error al conectar con la IA. Intenta nuevamente.");
        } finally {
            this.isGenerating = false;
        }
    },

    clearSession() {
        this.currentSession = null;
        this.errors = [];
    }
});