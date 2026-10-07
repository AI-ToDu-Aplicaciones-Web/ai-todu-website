import { reactive } from 'vue';
import { AiPromptSession } from '../domain/model/ai-prompt-session.entity.js';
import { AiAssistantAssembler } from '../infrastructure/ai-assistant.assembler.js';

// NOTA: Como aún no tenemos la API real (`ai-assistant-api.js`),
// simularemos la respuesta de la IA en este store para propósitos de la Landing Page.

/**
 * Reactive application store that coordinates AI assistance use cases.
 * Actúa como un Application Service en DDD.
 */
export const aiAssistantStore = reactive({
    currentSession: null,
    isGenerating: false,
    errors: [],

    /**
     * Inicia una nueva sesión de IA simulada a partir de un prompt del usuario.
     * @param {string} promptText - El objetivo ingresado por el usuario.
     */
    async generateTaskBreakdown(promptText) {
        this.isGenerating = true;
        this.errors = [];
        this.currentSession = null;

        try {
            // SIMULACIÓN DE LLAMADA A LA API BACKEND (ej: await aiApi.generate(promptText))
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simula delay de red

            // Mock del recurso DTO devuelto por la API
            const mockResource = {
                id: "sess-ai-12345",
                userId: "anon-visitor",
                promptText: promptText,
                generatedAt: new Date().toISOString(),
                items: [
                    { title: "Definir los requisitos principales", description: "Listar qué se necesita para empezar.", estimatedMinutes: 15 },
                    { title: "Configurar el entorno", description: "Preparar las herramientas y cuentas necesarias.", estimatedMinutes: 30 },
                    { title: "Ejecutar la primera acción", description: "Dar el primer paso tangible del proyecto.", estimatedMinutes: 45 }
                ]
            };

            // Mapear el recurso a Entidad de Dominio usando el Assembler
            const sessionEntity = AiAssistantAssembler.toEntityFromResource(mockResource);

            if (sessionEntity) {
                this.currentSession = sessionEntity;
            } else {
                throw new Error("No se pudo estructurar la respuesta de la IA.");
            }

        } catch (error) {
            console.error("Error generating tasks:", error);
            this.errors.push("Ocurrió un error al conectar con el asistente inteligente. Intenta de nuevo.");
        } finally {
            this.isGenerating = false;
        }
    },

    /**
     * Limpia la sesión actual.
     */
    clearSession() {
        this.currentSession = null;
        this.errors = [];
    }
});