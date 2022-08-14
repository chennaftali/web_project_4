export class Popup {
    constructor(popupSelector) {
        //this._popup = document.querySelector(this._popupSelector);
        this._popup = document.querySelector(popupSelector);
    }

    open () {
        this._popup = classList.add("popup_open")
        this.setEventListeners()
    }

    close = () => {
        this._popup = classList.remove("popup_open");
    }

    _handleEscClose() {

    }

    setEventListeners() {
        this._popup.querySelector(".popup__close").addEventListener("click", this.close);
    }
}