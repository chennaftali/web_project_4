const inputName = document.querySelector('.popup__content_type_name');
const inputOccupation = document.querySelector('.popup__content_type_about-me');
const Popup = document.querySelector('.popup');

const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('popup__close');


function openPopup() {
    Popup.classList.add("popup_open");
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
}
//function closePopup() {
//popup.classList.remove("popup_open");
//}
//function savePopup(e) {
    //closePopup();
    //e.preventDefault();
    //profileName.textContent = inputName.value;
    //profileOccupation.textContent = inputOccupation.value;
//}
openPopupButton.addEventListener("click", openPopup);
