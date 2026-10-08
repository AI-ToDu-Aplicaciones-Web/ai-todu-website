export class PurchaseOrder {
    _id;
    _customerId;
    _items;
    _status;
    _createdAt;

    constructor({ id, customerId }) {
        this._id = id;
        this._customerId = customerId;
        this._items = [];
        this._status = 'DRAFT'; // Estados: DRAFT, SUBMITTED, COMPLETED
        this._createdAt = new Date();
    }

    get id() { return this._id; }
    get status() { return this._status; }

    // Retornamos una copia congelada para evitar mutaciones externas
    get items() { return Object.freeze([...this._items]); }

    addItemsFromCart(cartItems) {
        if (this._status !== 'DRAFT') {
            throw new Error("Solo se pueden agregar ítems a una orden en borrador");
        }
        this._items = [...cartItems];
    }

    calculateTotal() {
        return this._items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }

    submit() {
        if (this._items.length === 0) throw new Error("La orden está vacía");
        this._status = 'SUBMITTED';
    }
}