import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1/authentication',
    headers: { 'Content-Type': 'application/json' }
});

export class IamApi {
    signIn(username, password) {
        return http.post('/sign-in', { username, password });
    }

    signUp(username, password) {
        return http.post('/sign-up', { username, password });
    }
}