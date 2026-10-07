/**
 * Value Object que representa una tarea generada por la IA.
 * Es inmutable y no tiene identidad propia.
 */
export class SuggestedTask {
    _title;
    _description;
    _estimatedMinutes;

    constructor({ title, description, estimatedMinutes }) {
        if (!title || title.trim() === '') {
            throw new Error("El título de la tarea sugerida no puede estar vacío.");
        }

        this._title = title;
        this._description = description || '';
        this._estimatedMinutes = estimatedMinutes > 0 ? estimatedMinutes : 30; // Valor por defecto

        // Inmutabilidad garantizada al finalizar la construcción
        Object.freeze(this);
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get estimatedMinutes() {
        return this._estimatedMinutes;
    }
}