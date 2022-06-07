import {
  enableButton,
  toggleButton,
  configurations,
  hideErrorsOnModalClose,
} from "./validate.js";


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

const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".card__list-item");

const previewImage = document.querySelector(".popup__img-preview");
const previewImageTitle = document.querySelector(".popup__header-img");



/////////////////Function/////////////////////

function openPopup(popup) {
  popup.classList.add("popup_open");
}

function openEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  openPopup(editProfilePopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
}

function saveProfilePopup(event) {
  closePopup(editProfilePopup);
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
}

const createCard = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__img");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__button_type_delete");
  const likeButton = cardElement.querySelector(".card__button_type-like");

  cardImage.src = card.link;
  cardImage.alt = `photo of ${card.name}`;
  cardTitle.textContent = card.name;

  const handleDelete = () => {
    cardElement.remove();
  };
  deleteButton.addEventListener("click", handleDelete);
  likeButton.addEventListener("click", toggleLikeButton);
  cardImage.addEventListener("click", function () {
    previewImage.src = card.link;
    previewImage.alt = `photo of ${card.name}`;
    previewImageTitle.textContent = card.name;
    openPopup(imagePopup);
  });
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
///////////////Event Listeners////////////////

openProfilePopupButton.addEventListener("click" , () => {

 openEditProfilePopup(); 
 
});

closeProfilePopupButton.addEventListener("click", () => {
  closePopup(editProfilePopup);
});

closeImagePopup.addEventListener("click", () => {
  closePopup(imagePopup);
});

formProfile.addEventListener("submit", saveProfilePopup);

addCardButton.addEventListener("click", () => {
  const inputList = Array.from(document.querySelectorAll(configurations.inputSelector));
  const button = document.querySelector(configurations.submitButtonSelector);
  openPopup(addCardPopup);
  toggleButton(inputList, button, configurations);
});

closeAddPopupButton.addEventListener("click", () => {
  closePopup(addCardPopup);
});

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = {
    name: addTitleInput.value,
    link: addImageInput.value,
  };
  renderCard(card);
  closePopup(addCardPopup);
  formAdd.reset();
});