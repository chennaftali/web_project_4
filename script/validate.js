function showError(input, formElement, configurations) {
    const error = input.validationMessage;
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    input.classList.add(configurations.inputErrorClass);
    errorElement.classList.add(configurations.errorClass);
}

function hideError(input, formElement, configurations) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(configurations.inputErrorClass);
    errorElement.classList.remove(configurations.errorClass);
}

function checkValidaty(input, formElement, configurations) {
    if(!input.validity.valid) {
        showError(input, formElement, configurations);
    }else{ 
        hideError(input, formElement, configurations);
    }
}

const thereInvalidInputs = (inputList) => {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  

export function enableButton(button, configurations) {
    button.disabled = false;
    button.classList.remove(configurations.inactiveButtonClass);
}

function disableButton(button, configurations) {
    button.disabled = true;
    button.classList.add(configurations.inactiveButtonClass);
} 

export function toggleButton(inputList, button, configurations) {
    if (thereInvalidInputs(inputList)) {
        disableButton(button,configurations);
    } else {
        enableButton(button,configurations);
    }
}

function setEventListeners(formElement, configurations) {
    const inputList = Array.from(formElement.querySelectorAll(configurations.inputSelector));
    const button = document.querySelector(configurations.submitButtonSelector);
  
    toggleButton(inputList, button, configurations);
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        checkValidaty(input, formElement, configurations);
        toggleButton(inputList, button, configurations);
      });
    });
  }; 


const enableValidation = (configurations) => {
    const form = Array.from(document.querySelectorAll(configurations.formSelector));
    //console.log(form);
    
    form.forEach((form) => {
        form.addEventListener('submit', (e) => e.preventDefault())
        setEventListeners(form, configurations);
        });
        };

        
export function hideErrorsOnModalClose(modal) {
    const formElement = modal.querySelector(configurations.formSelector);
    const inputList = [...formElement.querySelectorAll(configurations.inputSelector)];
    inputList.forEach((input) => {
        hideError(formElement, input, configurations);
    });
};
export const configurations = {
    formSelector: ".popup__form",
    inputSelector: ".popup__content",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
}

enableValidation(configurations);

