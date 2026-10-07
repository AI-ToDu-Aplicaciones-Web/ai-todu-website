import { ProfileId } from './profile-id.value-object.js';

export class Profile {
    _id;
    _userId;
    _firstName;
    _lastName;
    _bio;

    constructor({ id, userId, firstName, lastName, bio }) {
        this._id = new ProfileId(id);
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._bio = bio || '';
    }

    get id() { return this._id.value; }
    get userId() { return this._userId; }
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    get bio() { return this._bio; }

    get fullName() {
        return `${this._firstName} ${this._lastName}`.trim();
    }
}