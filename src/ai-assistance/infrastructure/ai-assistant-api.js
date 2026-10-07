import axios from 'axios';

// Instancia base de Axios. En el futuro esto puede moverse a shared/http-common.js
const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // URL de tu json-server
    headers: { 'Content-Type': 'application/json' }
});

export class AiAssistantApi {
    /**
     * Envía el prompt del usuario al backend para generar sugerencias.
     * @param {string} promptText
     */
    generateTasks(promptText) {
        return http.post('/ai-prompt-sessions', {
            userId: "current-user-id", // Esto luego vendrá de IAM
            promptText: promptText,
            generatedAt: new Date().toISOString(),
            // Simulamos la respuesta de la IA que el backend guardaría
            items: [
                { title: "Definir alcance", description: "Establecer objetivos claros.", estimatedMinutes: 15 },
                { title: "Preparar entorno", description: "Instalar dependencias necesarias.", estimatedMinutes: 30 }
            ]
        });
    }
}