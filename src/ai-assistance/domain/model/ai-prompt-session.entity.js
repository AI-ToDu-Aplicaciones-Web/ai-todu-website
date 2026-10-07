import { SuggestedTask } from './suggested-task.value-object.js';

/**
 * Entidad de dominio que representa una sesión de generación de tareas mediante IA.
 */
export class AiPromptSession {
    _sessionId;
    _profileId;
    _originalPrompt;
    _suggestedTasks;
    _createdAt;

    constructor({ sessionId, profileId, originalPrompt, suggestedTasks = [], createdAt }) {
        this._sessionId = sessionId;
        this._profileId = profileId;
        this._originalPrompt = originalPrompt;

        // Mapeo seguro de Value Objects
        this._suggestedTasks = suggestedTasks.map(task =>
            task instanceof SuggestedTask ? task : new SuggestedTask(task)
        );

        this._createdAt = createdAt ? new Date(createdAt) : new Date();

        // Aplicando ADR-0004: La entidad se construye completamente y se congela
        Object.freeze(this);
    }

    get sessionId() {
        return this._sessionId;
    }

    get profileId() {
        return this._profileId;
    }

    get originalPrompt() {
        return this._originalPrompt;
    }

    /**
     * Retorna una copia congelada para evitar manipulaciones externas del array.
     */
    get suggestedTasks() {
        return Object.freeze([...this._suggestedTasks]);
    }

    get createdAt() {
        return this._createdAt;
    }
}