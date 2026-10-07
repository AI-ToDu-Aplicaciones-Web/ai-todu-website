import { Profile } from '../domain/model/profile.entity.js';

export class ProfileAssembler {
    static toEntityFromResource(resource) {
        try {
            return new Profile({
                id: resource.id,
                userId: resource.userId,
                firstName: resource.firstName,
                lastName: resource.lastName,
                bio: resource.bio
            });
        } catch (error) {
            console.error('Error al ensamblar Profile:', error.message);
            return null;
        }
    }
}