import http from '../../shared/infrastructure/http-common.js';

export class TaskApi {
    getTasks() {
        return http.get('/tasks');
    }

    createTask(taskData) {
        return http.post('/tasks', taskData);
    }

    updateTask(taskId, taskData) {
        return http.put(`/tasks/${taskId}`, taskData);
    }

    deleteTask(taskId) {
        return http.delete(`/tasks/${taskId}`);
    }
}