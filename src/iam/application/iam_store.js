import { reactive } from 'vue';
import { IamApi } from '../infrastructure/iam-api.js';
import { UserAssembler } from '../infrastructure/user.assembler.js';

const api = new IamApi();

export const iamStore = reactive({
    currentUser: null,
    isAuthenticated: false,
    errors: [],

    async signIn(username, password) {
        this.errors = [];
        try {
            const response = await api.signIn(username, password);
            const userEntity = UserAssembler.toEntityFromResource(response.data);
            if (userEntity) {
                this.currentUser = userEntity;
                this.isAuthenticated = true;
                localStorage.setItem('token', userEntity.token);
            }
        } catch (error) {
            this.errors.push("Credenciales inválidas o error de conexión.");
        }
    },

    async signUp(username, password) {
        this.errors = [];
        try {
            await api.signUp(username, password);
            await this.signIn(username, password);
        } catch (error) {
            this.errors.push("Error al registrar el usuario.");
        }
    },

    signOut() {
        this.currentUser = null;
        this.isAuthenticated = false;
        localStorage.removeItem('token');
    }
});