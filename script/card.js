import {} from "./utils.js";

export class card {
  Constructor({ name, link }, templateCardSelector) {
    this.name = name;
    this.link = link;
    this._templateCardSelector = templateCardSelector;
    this.cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card__list-item");

    closePopupOverlay = (evt) => {
      const currentModal = document.querySelector(".popup_open");
      if (evt.target.classList.contains("popup")) {
        this._closePopup(evt.target);
      }
    };

    _closePopup = (popup) => {
      popup.classList.remove("popup_open");
      document.removeEventListener("keydown", this._closepopupOnEsc);
      document.removeEventListener("mousedown", this._closePopupOverlay);
    };

    _closepopupOnEsc = (evt) => {
      const currentModal = document.querySelector(".popup_open");
      if (evt.key === "Escape") {
        this._closePopup(currentModal);
      }
    };

    _toggleLikeButton = (e) => {
      const activLikeButton = e.target;
      activLikeButton.classList.toggle("card__button_type_active");
    };

    _handleDelete = () => {
      cardElement.remove();
    };

    _openPopup = (popup) => {
      popup.classList.add("popup_open");
      document.addEventListener("keydown", this._closepopupOnEsc);
      document.addEventListener("mousedown", this._closePopupOverlay);
    };

    createCard = () => {
      this._cardElement = this.cardTemplate.cloneNode(true);

      const cardImage = this._cardElement.querySelector(".card__img");
      const deleteButton = this._cardElement.querySelector(
        ".card__button_type_delete"
      );
      const likeButton = this._cardElement.querySelector(
        ".card__button_type-like"
      );

      cardImage.src = this._link;
      cardImage.alt = `photo of ${this._name}`;
      cardTitle.textContent = this._name;

      likeButton.addEventListener("click", this._toggleLikeButton);
      deleteButton.addEventListener("click", this._handleDelete);
      cardImage.addEventListener("click", function () {
        previewImage.src = this._link;
        previewImage.alt = `photo of ${this._name}`;
        previewImageTitle.textContent = this._name;
        openPopup(imagePopup);
      });
      return cardElement;
    };
  }
}
