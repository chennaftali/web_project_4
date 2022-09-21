import "./index.css";
import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";

import {
  setting,
  elementList,
  addCardForm,
  editProfileForm,
  editProfilePopup,
  addCardPopup,
  imagePopup,
  formProfile,
  inputName,
  inputOccupation,
  formAdd,
  addTitleInput,
  addImageInput,
  openProfilePopupButton,
  closeProfilePopupButton,
  closeImagePopup,
  addCardButton,
  closeAddPopupButton,
  profileName,
  profileOccupation,
  initialCards,
} from "../utils/constants.js";
// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://code.s3.yandex.net/web-code/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://code.s3.yandex.net/web-code/lago.jpg",
//   },
// ];

// const elementList = document.querySelector(".element__list");

const popup = new Popup(".popup popup_type_add-card");

const createCard = (data) => {
  const card = new Card(data, "#card__template", () => {
    imageModal.popup.open(data.link, data.name);
  });
  const cardElement = card.createCard();

  return cardElement;
};

const renderCard = (card) => {
  const item = createCard(card);
  elementList.prepend(item);
};
const section = new Section(
        renderCard,
      elementList
    );

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__explorer",
});
const imageModal = new PopupWithImage(".popup_type_image-preview");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_type-edit", (data) => {
  userInfo.setUserInfo(data);
});
editModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_type_add-card", (data) => {
  const card = {
    //add card
    name: data.placeName,
    link: data.link,
  };
  section.render(card);
  //console.log("data", data)
});
addCardModal.setEventListeners();

// import {
//   openPopup,
//   closePopup,
//   closePopupOnEsc,
//   closePopupOverlay,
// } from "../script/utils.js";
//import { from } from 'core-js/core/array';
// const setting = {
//   inputSelector: ".popup__content",
//   submitButtonSelector: ".popup__save",
//   inactiveButtonClass: "popup__save_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

// const addCardForm = document.querySelector(".popup__form_type-add");
// const editProfileForm = document.querySelector(".popup__form_type-profile");

const addCardFormValidator = new FormValidator(setting, addCardForm);
const editProfileFormValidator = new FormValidator(setting, editProfileForm);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
initialCards.forEach((card)=>{
  section.render(card)
})
////////////
////////////
//Declaration//
////////////

// ////////////popup//////////////
// ///////////////////////////////
// const editProfilePopup = document.querySelector(".popup_type-edit");
// const addCardPopup = document.querySelector(".popup_type_add-card");
// const imagePopup = document.querySelector(".popup_type_image-preview");
// ///////////Forms//////////////
// const formProfile = document.querySelector(".popup__form_type-profile");
// const inputName = document.querySelector(".popup__content_type_name");
// const inputOccupation = document.querySelector(".popup__content_type_about-me");

// const formAdd = document.querySelector(".popup__form_type-add");
// const addTitleInput = document.querySelector(".popup__content_type_img-title");
// const addImageInput = document.querySelector(".popup__content_type_img-link");
// //////////Buttons/////////////

// const openProfilePopupButton = document.querySelector(".profile__edit-button");
// const closeProfilePopupButton = document.querySelector(
//   ".popup__close_type-proile"
// );
// const closeImagePopup = document.querySelector(
//   ".popup__close_type_image-preview"
// );
// const addCardButton = document.querySelector(".profile__add-button");
// const closeAddPopupButton = document.querySelector(".popup__close_type_add");
// /////////others DOM element/////////////
// const profileName = document.querySelector(".profile__name");
// const profileOccupation = document.querySelector(".profile__explorer");

/////////////////Function/////////////////////
function openEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  //openPopup(editProfilePopup);
  popup.open(editProfilePopup);
  editProfileFormValidator.toggleButtonState();
}

function toggleLikeButton(e) {
  const activLikeButton = e.target;
  activLikeButton.classList.toggle("card__button_type_active");
}

initialCards.forEach(renderCard);

/////////add-card-function////////////////////////////////
function handleAddCardClick() {
  //openPopup(addCardPopup);
  popup.open(addCardPopup);
  addCardFormValidator.disableButton();
}
addCardButton.addEventListener("click", handleAddCardClick);
/////////////////////////////////////////////////////////////////////////
///////////////Event Listeners////////////////

openProfilePopupButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  editModal.popup.open();
});

closeProfilePopupButton.addEventListener("click", () => {
  //closePopup(editProfilePopup);
  popup.close(editProfilePopup);
});

closeImagePopup.addEventListener("click", () => {
  //closePopup(imagePopup);
  popup.close(imagePopup);
});

closeAddPopupButton.addEventListener("click", () => {
  //closePopup(addCardPopup);
  popup.close(addCardPopup);
});

formAdd.addEventListener("submit", function (event) {
  //closePopup(addCardPopup);
  popup.close(addCardPopup);
  formAdd.reset();
});
