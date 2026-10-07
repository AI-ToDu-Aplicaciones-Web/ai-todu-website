import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: { 'Content-Type': 'application/json' }
});

export class ProfileApi {
    getProfileByUserId(userId) {
        return http.get(`/profiles?userId=${userId}`);
    }

    createProfile(profileData) {
        return http.post('/profiles', profileData);
    }

    updateProfile(profileId, profileData) {
        return http.put(`/profiles/${profileId}`, profileData);
    }
}