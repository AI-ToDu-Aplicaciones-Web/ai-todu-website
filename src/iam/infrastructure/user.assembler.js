import { User } from '../model/user.entity.js';

export class UserAssembler {
    static toEntityFromResource(resource) {
        try {
            return new User({
                id: resource.id,
                username: resource.username,
                token: resource.token
            });
        } catch (error) {
            console.error('Error al ensamblar User:', error.message);
            return null;
        }
    }
}