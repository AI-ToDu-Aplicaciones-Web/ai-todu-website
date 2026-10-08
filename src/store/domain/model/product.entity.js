export class Product {
    _id;
    _name;
    _price;
    _imageUrl;

    constructor({ id, name, price, imageUrl = '' }) {
        if (!id || !name || price < 0) {
            throw new Error("Datos de producto inválidos");
        }
        this._id = id;
        this._name = name;
        this._price = price;
        this._imageUrl = imageUrl;

        // Congelamos el objeto para garantizar la inmutabilidad propia de DDD
        Object.freeze(this);
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get price() { return this._price; }
    get imageUrl() { return this._imageUrl; }
}