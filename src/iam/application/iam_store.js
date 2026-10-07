import { reactive } from 'vue';
import { IamApi } from '../infrastructure/iam-api.js';

const api = new IamApi();

export const iamStore = reactive({
    isLoading: false,
    errors: [],

    async registerUser(userData) {
        this.isLoading = true;
        this.errors = [];
        try {
            const response = await api.signUp(userData);
            return response.data;
        } catch (error) {
            this.errors.push("Error al registrar el usuario en el servidor.");
            return null;
        } finally {
            this.isLoading = false;
        }
    }
});