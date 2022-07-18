import { openPopup } from "./utils.js";

const previewImage = document.querySelector('.popup__img-preview');
const previewImageTitle = document.querySelector('.popup__header-img');
const imagePopup = document.querySelector('.popup_type_image-preview');

export  class Card {
  constructor({ name, link }, templateCardSelector) {

    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;////לבדוק
  }

_getElement = () => { return document.querySelector(this._templateCardSelector)
.content.querySelector(".card__list-item").cloneNode(true); 
}
//this._cardElement = this._getElement();  


 _toggleLikeButton = (e) => {
   const activLikeButton = e.target;
   activLikeButton.classList.toggle("card__button_type_active");
 };

 _handleDelete = (cardElement) => {
   cardElement.remove();
 };

 createCard () {
  this._cardElement = this._getElement();  
  console.log(this);
   //const cardElement = this.cardTemplate.cloneNode(true);
   const cardElement = this._getElement()

   const cardImage = cardElement.querySelector(".card__img");
   const cardTitle = cardElement.querySelector(".card__title");
   const deleteButton = cardElement.querySelector(
     ".card__button_type_delete"
   );
   const likeButton = cardElement.querySelector(
     ".card__button_type-like"
   );

   cardImage.src = this._link;
   cardImage.alt = `photo of ${this._name}`;
   cardTitle.textContent = this._name;

   likeButton.addEventListener("click", this._toggleLikeButton);
   deleteButton.addEventListener("click", function () {
     cardElement.remove();
     });
   cardImage.addEventListener("click", function () {
     previewImage.src = this._link;
     previewImage.alt = `photo of ${this._name}`;
     previewImageTitle.textContent = this._name;
     openPopup(imagePopup);
   });
   return cardElement;
 };
}