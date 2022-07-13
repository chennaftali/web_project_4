export const previewImage = document.querySelector(".popup__img-preview");
export const previewImageTitle = document.querySelector(".popup__header-img");

 const closePopupOverlay = (evt) => {
  const currentModal = document.querySelector(".popup_open");
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
};

 export const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupOnEsc);
  document.removeEventListener("mousedown", closePopupOverlay);
};

 const closePopupOnEsc = (evt) => {
  const currentModal = document.querySelector(".popup_open");
  if (evt.key === "Escape") {
    closePopup(currentModal);
  }
};

export const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupOnEsc);
  document.addEventListener("mousedown", closePopupOverlay);
};
