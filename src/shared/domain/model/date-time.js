export class DateTime {
    #value;

    constructor(dateString) {
        this.#value = dateString ? new Date(dateString) : new Date();
        Object.freeze(this);
    }

    get value() {
        return this.#value;
    }

    format() {
        return this.#value.toISOString().split('T')[0];
    }
}