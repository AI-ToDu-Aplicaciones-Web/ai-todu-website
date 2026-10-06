import { AiPromptSession } from '../domain/model/ai-prompt-session.entity.js';

/**
 * Infrastructure service that maps AI response data from API into Domain Entities.
 * Actúa como un Data Mapper aislando el modelo de dominio del contrato de la API.
 */
export class AiAssistantAssembler {

    /**
     * Mapea el recurso DTO de la API a una entidad de dominio.
     * @param {Object} resource - Datos crudos devueltos por el backend (ej. JSON)
     * @returns {AiPromptSession} Entidad ensamblada
     */
    toEntityFromResource(resource) {
        try {
            return new AiPromptSession({
                sessionId: resource.id, // Transformando claves de la API a campos del dominio
                profileId: resource.userId,
                originalPrompt: resource.promptText,
                suggestedTasks: resource.items || [], // Asumimos que la API devuelve un array 'items'
                createdAt: resource.generatedAt
            });
        } catch (error) {
            console.error('Error al ensamblar AiPromptSession:', error.message, resource);
            return null;
        }
    }
}