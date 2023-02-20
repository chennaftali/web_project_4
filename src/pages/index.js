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
  inputName,
  inputOccupation,
  formAdd,
  addTitleInput,
  addImageInput,
  openProfilePopupButton,
  closeProfilePopupButton,
  addCardButton,
  closeAddPopupButton,
  profileName,
  profileOccupation,
  initialCards,
} from "../utils/constants.js";

const submitHandler = new UserInfo({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__explorer",
});

const popupWithForm = new PopupWithForm(".popup_type_add-card", submitHandler);

const createCard = (data) => {
  const card = new Card(data, "#card__template", () => {
    imageModal.open(data.link, data.name);
  });
  const cardElement = card.createCard();

  return cardElement;
};

const prependCard = (e) => {
  const card = createCard(e);
  elementList.prepend(card);
};

const section = new Section(
  { items: initialCards, renderer: prependCard },
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
  console.log(data);
  const card = {
    name: `${data.placeName}`,
    link: `${data.link}`,
  };
  section.addItem(card);
});
addCardModal.setEventListeners();

const addCardFormValidator = new FormValidator(setting, addCardForm);
const editProfileFormValidator = new FormValidator(setting, editProfileForm);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
section.renderItems();

/////////////////Function/////////////////////

/////////add-card-function////////////////////////////////
function handleAddCardClick() {
  addCardModal.open();
  addCardFormValidator.disableButton();
}
addCardButton.addEventListener("click", handleAddCardClick);
/////////////////////////////////////////////////////////////////////////
///////////////Event Listeners////////////////

openProfilePopupButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputOccupation.value = data.job;
  editModal.open();
});
