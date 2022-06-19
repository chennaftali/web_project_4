function showError(input, setting) {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  errorElement.classList.add(setting.popup__content_theam_error);
}

export const hideError = (input, setting) => {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  errorElement.classList.remove(setting.popup__content_theam_error);
};

export const disableButton = (button) => {
  button.disabled = true;
  button.classList.add("popup__save_disabled");
};

const enableButton = (button) => {
  button.disabled = false;
  button.classList.remove("popup__save_disabled");
};

export const toggleButtonState = (inputs, button) => {
  const isFormValid = inputs.every((input) => input.validity.valid);
  if (isFormValid) {
    enableButton(button);
  } else {
    disableButton(button);
  }
};

export const resetValidation = (inputs) => {
  inputs.forEach((inputs) => {
    hideError(inputs);
  });
};

function checkValidaty(input, setting) {
  if (input.validity.valid) {
    hideError(input, setting);
  } else {
    showError(input, setting);
  }
}

function enableValidation(setting) {
  const forms = [...document.querySelectorAll(".popup__form")];

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
    const inputs = [...form.querySelectorAll(configurations.inputSelector)];
    const button = form.querySelector(setting.submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkValidaty(input, setting);
        toggleButtonState(inputs, button, setting);
      });
    });
  });
}
export const configurations = {
  formSelector: ".popup__form",
  inputSelector: ".popup__content",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(configurations);
