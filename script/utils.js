
//  export const closePopupOverlay = (evt) => {
//   if (evt.target.classList.contains("popup")) {
//     const currentModal = document.querySelector(".popup_open");
//     closePopup(evt.target);
//   }
// };

//  export const closePopup = (popup) => {
//   popup.classList.remove("popup_open");
//   document.removeEventListener("keydown", closePopupOnEsc);
//   document.removeEventListener("mousedown", closePopupOverlay);
// };

// export const closePopupOnEsc = (evt) => {
//   if (evt.key === "Escape") {
//     const currentModal = document.querySelector(".popup_open");
//     closePopup(currentModal);
//   }
// };

// export const openPopup = (popup) => {
//   popup.classList.add("popup_open");
//   document.addEventListener("keydown", closePopupOnEsc);
//   document.addEventListener("mousedown", closePopupOverlay);
// };
