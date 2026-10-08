import { UserId } from './user-id.value-object.js';

export class User {
    _id;
    _username;
    _token;

    constructor({ id, username, token }) {
        this._id = new UserId(id);
        this._username = username;
        this._token = token || null;
        Object.freeze(this);
    }

    get id() { return this._id.value; }
    get username() { return this._username; }
    get token() { return this._token; }
}