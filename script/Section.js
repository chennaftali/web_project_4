class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this.renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem() {

    }
}