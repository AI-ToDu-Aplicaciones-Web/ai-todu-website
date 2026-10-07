import { reactive } from 'vue';
import { ProfileApi } from '../infrastructure/profile-api.js';
import { ProfileAssembler } from '../infrastructure/profile.assembler.js';

const api = new ProfileApi();

export const profileStore = reactive({
    currentProfile: null,
    isLoading: false,
    errors: [],

    async fetchProfile(userId) {
        this.isLoading = true;
        this.errors = [];
        try {
            const response = await api.getProfileByUserId(userId);
            if (response.data && response.data.length > 0) {
                this.currentProfile = ProfileAssembler.toEntityFromResource(response.data[0]);
            } else {
                this.currentProfile = null;
            }
        } catch (error) {
            this.errors.push("Error al cargar el perfil.");
        } finally {
            this.isLoading = false;
        }
    },

    async saveProfile(profileData) {
        this.isLoading = true;
        this.errors = [];
        try {
            let response;
            if (this.currentProfile) {
                response = await api.updateProfile(this.currentProfile.id, profileData);
            } else {
                response = await api.createProfile(profileData);
            }
            this.currentProfile = ProfileAssembler.toEntityFromResource(response.data);
        } catch (error) {
            this.errors.push("Error al guardar el perfil.");
        } finally {
            this.isLoading = false;
        }
    }
});