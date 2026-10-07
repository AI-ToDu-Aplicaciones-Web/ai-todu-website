import { reactive } from 'vue';
import { TaskApi } from '../infrastructure/task-api.js';
import { TaskAssembler } from '../infrastructure/task.assembler.js';

const api = new TaskApi();

export const taskStore = reactive({
    tasks: [],
    isLoading: false,
    errors: [],

    async fetchTasks() {
        this.isLoading = true;
        this.errors = [];
        try {
            const response = await api.getTasks();
            this.tasks = TaskAssembler.toEntitiesFromResourceList(response.data);
        } catch (error) {
            this.errors.push("Error al cargar las tareas.");
        } finally {
            this.isLoading = false;
        }
    },

    async addTask(taskData) {
        this.isLoading = true;
        try {
            const response = await api.createTask(taskData);
            const newTask = TaskAssembler.toEntityFromResource(response.data);
            if (newTask) this.tasks.push(newTask);
        } catch (error) {
            this.errors.push("Error al crear la tarea.");
        } finally {
            this.isLoading = false;
        }
    },

    async markAsCompleted(task) {
        try {
            task.complete();
            await api.updateTask(task.id, {
                title: task.title,
                description: task.description,
                status: task.status,
                dueDate: task.dueDate
            });
            await this.fetchTasks();
        } catch (error) {
            this.errors.push("Error al actualizar la tarea.");
        }
    }
});