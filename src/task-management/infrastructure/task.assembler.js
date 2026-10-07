import { Task } from '../domain/model/task.entity.js';

export class TaskAssembler {
    static toEntityFromResource(resource) {
        try {
            return new Task({
                id: resource.id,
                title: resource.title,
                description: resource.description,
                status: resource.status,
                dueDate: resource.dueDate
            });
        } catch (error) {
            console.error('Error al ensamblar Task:', error.message);
            return null;
        }
    }

    static toEntitiesFromResourceList(resources) {
        return resources.map(resource => this.toEntityFromResource(resource)).filter(task => task !== null);
    }
}