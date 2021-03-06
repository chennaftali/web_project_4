import { Card } from "./Card.js";

import { FormValidator } from "./FormValidator.js";
import {
  openPopup,
  closePopup,
  closePopupOnEsc,
  closePopupOverlay,
} from "./utils.js";
const setting = {
  inputSelector: ".popup__content",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const addCardForm = document.querySelector(".popup__form_type-add");
const editProfileForm = document.querySelector(".popup__form_type-profile");

const addCardFormValidator = new FormValidator(setting, addCardForm);
const editProfileFormValidator = new FormValidator(setting, editProfileForm);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();

////////////
////////////
//Declaration//
////////////
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

////////////popup//////////////
///////////////////////////////
const editProfilePopup = document.querySelector(".popup_type-edit");
const addCardPopup = document.querySelector(".popup_type_add-card");
const imagePopup = document.querySelector(".popup_type_image-preview");
///////////Forms//////////////
const formProfile = document.querySelector(".popup__form_type-profile");
const inputName = document.querySelector(".popup__content_type_name");
const inputOccupation = document.querySelector(".popup__content_type_about-me");

const formAdd = document.querySelector(".popup__form_type-add");
const addTitleInput = document.querySelector(".popup__content_type_img-title");
const addImageInput = document.querySelector(".popup__content_type_img-link");
//////////Buttons/////////////

const openProfilePopupButton = document.querySelector(".profile__edit-button");
const closeProfilePopupButton = document.querySelector(
  ".popup__close_type-proile"
);
const closeImagePopup = document.querySelector(
  ".popup__close_type_image-preview"
);
const addCardButton = document.querySelector(".profile__add-button");
const closeAddPopupButton = document.querySelector(".popup__close_type_add");
/////////others DOM element/////////////
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__explorer");
const elementList = document.querySelector(".element__list");
const button = formAdd.querySelector(".popup__save");

/////////////////Function/////////////////////
function openEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  openPopup(editProfilePopup);
  editProfileFormValidator.toggleButtonState();
}

function saveProfilePopup(event) {
  event.preventDefault();
  closePopup(editProfilePopup);
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  const button = formAdd.querySelector(".popup__save");
  editProfileFormValidator.disableButton();
}

const createCard = (data) => {
  const card = new Card(data, "#card__template");
  const cardElement = card.createCard();

  return cardElement;
};

function toggleLikeButton(e) {
  const activLikeButton = e.target;
  activLikeButton.classList.toggle("card__button_type_active");
}
const renderCard = (card) => {
  const item = createCard(card);
  elementList.prepend(item);
};

initialCards.forEach(renderCard);

/////////add-card-function////////////////////////////////
function handleAddCardClick() {
  openPopup(addCardPopup);
  editProfileFormValidator.disableButton();
}
addCardButton.addEventListener("click", handleAddCardClick);
/////////////////////////////////////////////////////////////////////////
///////////////Event Listeners////////////////

openProfilePopupButton.addEventListener("click", () => {
  openEditProfilePopup();
  editProfileFormValidator.resetValidation();
});

closeProfilePopupButton.addEventListener("click", () => {
  closePopup(editProfilePopup);
});

closeImagePopup.addEventListener("click", () => {
  closePopup(imagePopup);
});

formProfile.addEventListener("submit", saveProfilePopup);

closeAddPopupButton.addEventListener("click", () => {
  closePopup(addCardPopup);
});

formAdd.addEventListener("submit", function (event) {
  const card = {
    name: addTitleInput.value,
    link: addImageInput.value,
  };

  renderCard(card);
  closePopup(addCardPopup);
  formAdd.reset();
});
