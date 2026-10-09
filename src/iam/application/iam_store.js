import { reactive } from 'vue';
import { IamApi } from '../infrastructure/iam-api.js';

const api = new IamApi();

export const iamStore = reactive({
    isLoading: false,
    errors: [],

    async signUp(username, password, fullName) {
        this.isLoading = true;
        this.errors = [];
        try {
            // Estructura de datos que se enviará y guardará en la MockAPI (/users)
            const userData = {
                username,
                password,
                fullName
            };
            const response = await api.signUp(userData);
            return response.data;
        } catch (error) {
            this.errors.push("Error al registrar el usuario en el servidor.");
            throw error;
        } finally {
            this.isLoading = false;
        }
    }
});