function showError(input, setting) {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  errorElement.classList.add(setting.errorClass);
}

export const hideError = (input, setting) => {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  errorElement.classList.remove(setting.errorClass);
};

export const disableButton = (button, setting) => {
  button.disabled = true;
  button.classList.add(setting.inactiveButtonClass);
};

const enableButton = (button, setting) => {
  button.disabled = false;
  button.classList.remove(setting.inactiveButtonClass);
  //button.classList.remove(".popup__save_disabled");
};

export const toggleButtonState = (inputs, button, setting) => {
  const isFormValid = inputs.every((input) => input.validity.valid);
  if (isFormValid) {
    enableButton(button, setting);
  } else {
    disableButton(button, setting);
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
