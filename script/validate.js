export const setting = {
  formSelector: ".popup__form",
  inputSelector: ".popup__content",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(setting);

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
  console.log(setting);
  button.classList.add(setting.inactiveButtonClass);
};


const enableButton = (button, setting) => {
  button.disabled = false;
  button.classList.remove(setting.inactiveButtonClass);
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
    hideError(inputs, setting);
  });
};

function checkValidaty(input, setting) {
  if (input.validity.valid) {
    hideError(input, setting);
  } else {
    showError(input, setting);
  }
}

function enableValidation(setting, input, button) {
  const forms = [...document.querySelectorAll(".popup__form")];

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
    const inputs = [...form.querySelectorAll(setting.inputSelector)];
    const button = form.querySelector(setting.submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkValidaty(input, setting);
        toggleButtonState(inputs, button, setting);
      });
    });
  });
}

