export class StringValidator {
    static isBlank(value) {
        return !value || value.trim().length === 0;
    }

    static isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}