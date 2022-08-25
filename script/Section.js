export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        //this._container = document.querySelector(containerSelector);
    }
    // addItem(element) {
    //     this._items.forEach((items) => {
    //         this._renderer(items)
    //     })
    //     this._container.prepend(element)

    // }

    addItem(element) {
        this._container.prepend(element)
    }
    render() {
        this._items.forEach(data => {
            this._renderer(data)
        })
    }
}