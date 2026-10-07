import http from '../../shared/infrastructure/http-common.js';

export class IamApi {
    async signUp(userData) {
        return await http.post('/users', userData);
    }

    async signIn(credentials) {
        const response = await http.get(`/users?username=${credentials.username}&password=${credentials.password}`);
        return response.data;
    }
}