import { Popup } from "../script/Popup.js";

export class PopupWithImage extends Popup {
   open(text, link) {
    const caption = this._popup.querySelector(".popup__header-img");
    const image = this._popup.querySelector(".popup__img-preview");

    caption.textContent = text;
    image.src = link;

    super.open();
   }
}