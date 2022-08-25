import {Card} from '../script/Card.js'

import { FormValidator } from "../script/FormValidator.js";
import { PopupWithImage } from "../script/PopupWithImage.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { UserInfo } from "../script/UserInfo.js";
import { Section } from "../script/Section.js";

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

const elementList = document.querySelector(".element__list");

const createCard = (data) => {
  const card = new Card(data, "#card__template", () => {
    imageModal.open(data.link, data.name);
  } )
  const cardElement = card.createCard();

  return cardElement;
};

const section = new Section({
  items:[initialCards],
  renderer: () => { createCard }
}, elementList)
section.render()

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name", profileJobSelector: ".profile__explorer",
})
const imageModal = new PopupWithImage(".popup_type_image-preview")
imageModal.setEventListeners();

 const editModal = new PopupWithForm(".popup_type-edit", (data) => {

 userInfo.setUserInfo(data)
})
   //console.log("data", data)

//    profileName.textContent = data.about;
//    profileOccupation.textContent = data.name;
 editModal.setEventListeners();

 const addCardModal = new PopupWithForm(".popup_type_add-card",  (data) => {
   const card = {       //add card
     name: data.placeName,
     link: data.link
   };
   renderCard(card);
  console.log("data", data)
//   // profileName.textContent = data.name;
//   // profileOccupation.textContent = data.Occupation;
 })
addCardModal.setEventListeners();

import {
  openPopup,
  closePopup,
  closePopupOnEsc,
  closePopupOverlay,
} from "../script/utils.js";
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
//const elementList = document.querySelector(".element__list");

/////////////////Function/////////////////////
function openEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  openPopup(editProfilePopup);
  editProfileFormValidator.toggleButtonState();
}

// function saveProfilePopup(event) {
//   event.preventDefault();
//   closePopup(editProfilePopup);
//   profileName.textContent = inputName.value;
//   profileOccupation.textContent = inputOccupation.value;
//   editProfileFormValidator.disableButton();
// }

// const createCard = (data) => {
//   const card = new Card(data, "#card__template", () => {
//     imageModal.open(data.link, data.name);
//   } )
//   const cardElement = card.createCard();

//   return cardElement;
// };

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
  addCardFormValidator.disableButton();
}
addCardButton.addEventListener("click", handleAddCardClick);
/////////////////////////////////////////////////////////////////////////
///////////////Event Listeners////////////////

openProfilePopupButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo()
  editModal.open();
  //openEditProfilePopup();
  //editProfileFormValidator.resetValidation();
});

closeProfilePopupButton.addEventListener("click", () => {
  closePopup(editProfilePopup);
});

closeImagePopup.addEventListener("click", () => {
  closePopup(imagePopup);
});

// formProfile.addEventListener("submit", saveProfilePopup);
//formProfile.addEventListener("submit", editModal);

closeAddPopupButton.addEventListener("click", () => {
  closePopup(addCardPopup);
});

formAdd.addEventListener("submit", function (event) {
  // const card = {
  //   name: addTitleInput.value,
  //   link: addImageInput.value,
  // };

  //renderCard(card);
  closePopup(addCardPopup);
  formAdd.reset();
});
