export class UserId {
    _value;

    constructor(value) {
        if (!value) throw new Error("El ID de usuario no puede estar vacío.");
        this._value = value;
        Object.freeze(this);
    }

    get value() {
        return this._value;
    }
}