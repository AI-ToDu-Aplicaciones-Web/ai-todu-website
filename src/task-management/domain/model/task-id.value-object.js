export class TaskId {
    _value;

    constructor(value) {
        if (!value) throw new Error("El ID de la tarea no puede estar vacío.");
        this._value = value;
        Object.freeze(this);
    }

    get value() {
        return this._value;
    }
}