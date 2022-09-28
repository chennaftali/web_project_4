export class Section {
    constructor( renderer , containerSelector) {

        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(item) {
        const card = this._renderer(item)
        this._container.prepend(card);
      }
    render(data) {
        this._renderer(data)
    }
    
    renderCard(item) {
        this._renderer(item);
      }
}

