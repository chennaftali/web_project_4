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

const popup = new Popup(".popup popup_type_add-card");

const createCard = (data) => {
  const card = new Card(data, "#card__template", () => {
    imageModal.open(data.link, data.name);
  });
  const cardElement = card.createCard();

  return cardElement;
};

const renderCard = (card) => {
  const item = createCard(card);
  //elementList.prepend(item);
  return item;
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
    name: data.placeName,
    link: data.link,
  };
  section.render(card);
});
addCardModal.setEventListeners();

const addCardFormValidator = new FormValidator(setting, addCardForm);
const editProfileFormValidator = new FormValidator(setting, editProfileForm);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
initialCards.forEach((card)=>{
  section.addItem(card)
})

/////////////////Function/////////////////////
function openEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
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
  addCardModal.open(addCardPopup);
  addCardFormValidator.disableButton();
}
addCardButton.addEventListener("click", handleAddCardClick);
/////////////////////////////////////////////////////////////////////////
///////////////Event Listeners////////////////

openProfilePopupButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  // console.log(inputName)
  // console.log(inputOccupation)
  // inputName.value = data.name;
  // inputOccupation.value = data.job;
  editModal.open();
});

openProfilePopupButton.addEventListener('click', openEditProfilePopup)