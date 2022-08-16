export class Popup {
    constructor(popupSelector) {
        //this._popup = document.querySelector(this._popupSelector);
        this._popup = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
    }

    open () {
        this._popup.classList.add("popup_open");
        //this.setEventListeners()
        document.addEventListener("click", this._handleOverlayClose);
        document.addEventListener("keydown", this._handleEscClose);
    }

    close = () => {
        this._popup.classList.remove("popup_open");
        document.removeEventListener("click", this._handleOverlayClose);
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (e) => {
        if(e.key ==="Escape") {
            this.close();
        }
    }

    _handleOverlayClose = (e) => {
        if(e.target.classList.contains("popup")) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector(".popup__close").addEventListener("click", this.close);
    }
}