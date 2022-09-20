export class Section {
    constructor( renderer , containerSelector) {
        this._renderer = renderer;
    }

    addItem(item) {
        const card = this._renderer(item)
        this._container.prepend(card);
      }
    render(data) {
        // this._items.forEach(data => {
        //     this._renderer(data)
        // })
        this._renderer(data)
    }
}

