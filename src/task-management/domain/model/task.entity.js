import { TaskId } from './task-id.value-object.js';

export class Task {
    _id;
    _title;
    _description;
    _status;
    _dueDate;

    constructor({ id, title, description, status, dueDate }) {
        this._id = new TaskId(id);
        this._title = title;
        this._description = description || '';
        this._status = status || 'pending'; // pending, in-progress, completed
        this._dueDate = dueDate ? new Date(dueDate) : null;
    }

    get id() { return this._id.value; }
    get title() { return this._title; }
    get description() { return this._description; }
    get status() { return this._status; }
    get dueDate() { return this._dueDate; }

    isCompleted() {
        return this._status === 'completed';
    }

    complete() {
        this._status = 'completed';
    }
}