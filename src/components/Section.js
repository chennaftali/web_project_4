export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(item) {
    const card = this._renderer(item);
    
  }

  renderItems() {

    this._items.forEach((data) => {
      this._renderer(data);
      
    });
  }


}
