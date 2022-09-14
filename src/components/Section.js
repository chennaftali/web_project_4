export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        //this._container = document.querySelector(containerSelector);
    }

    // addItem(element) {
    //     this._container.prepend(element)
    // }

    addItem(item) {
        const card = this._renderer(item)
        this._container.prepend(card);
      }
    render() {
        this._items.forEach(data => {
            this._renderer(data)
        })
    }
}

// export class Section {
//     constructor({ items, renderer }, containerSelector) {
//         this._items = items;
//         this._renderer = renderer;
//         //this._container = document.querySelector(containerSelector);
//     }

//     addItem(element) {
//         this._container.prepend(element)
//     }
//     render() {
//         this._items.forEach(data => {
//             this._renderer(data)
//         })
//     }
// }
