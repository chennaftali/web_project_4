const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const inputName = document.querySelector('.popup__content_type_name');
const inputOccupation = document.querySelector('.popup__content_type_about-me');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__explorer');
const formSubmit = document.querySelector('.popup__form');
const form = document.querySelector('popup__form');


function openPopup () {
    popup.classList.add('popup_open');
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
}

function closePopup() {
    popup.classList.remove('popup_open');
}

function savePopup(event) {
    closePopup();
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
}
openPopupButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formSubmit.addEventListener('submit', savePopup);
