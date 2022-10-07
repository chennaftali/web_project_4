export class Card {
  constructor(data, templateCardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;

    this._handleCardClick = handleCardClick;
    this._templateCardSelector = templateCardSelector;
  }

  _getElement = () => {
    return document
      .querySelector(this._templateCardSelector)
      .content.querySelector(".card__list-item")
      .cloneNode(true);
  };

  _toggleLikeButton = (e) => {
    const activLikeButton = e.target;
    activLikeButton.classList.toggle("card__button_type_active");
  };

  _handleDelete = () => {
    this._cardElement.remove();
  };

  _setEventListeners() {
    this._likeButton.addEventListener("click", this._toggleLikeButton);
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._cardImage.addEventListener("click", this._handleCardClick);
  }
  createCard() {
    this._cardElement = this._getElement();

    this._cardImage = this._cardElement.querySelector(".card__img");
    const cardTitle = this._cardElement.querySelector(".card__title");
    this._deleteButton = this._cardElement.querySelector(
      ".card__button_type_delete"
    );
    this._likeButton = this._cardElement.querySelector(
      ".card__button_type-like"
    );

    this._cardImage.src = this._link;
    this._cardImage.alt = `photo of ${this._name}`;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
