
function showError(input) {
    const error = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    //input.classList.add("popup__content_theam_error");
    errorElement.classList.add("popup__content_theam_error");
}

export const hideError = (input) => {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove("popup__content_theam_error");
}



export const toggleButtonState = (inputs, button) => {
    const isFormValid = inputs.every((input) => input.validity.valid);
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove("popup__save_disabled");
    } else {
      button.disabled = true;
      button.classList.add("popup__save_disabled");
    }
  };

 export const resetValidation = (inputs) => {
   // const inputs = [...document.querySelectorAll(".popup__content")];
    inputs.forEach((inputs) => {
            hideError(inputs);
        })
}

function checkValidaty(input) {
    if(input.validity.valid) {
        hideError(input);
    }else{
        showError(input);
    }
}


function enableValidation(setting) {
    const forms = [...document.querySelectorAll(".popup__form")];
    console.log(forms);

    forms.forEach(form => {
        form.addEventListener("submit", (e) => e.preventDefault());
        const inputs = [...form.querySelectorAll(".popup__content")];
        const button = form.querySelector(".popup__save");


        inputs.forEach(input => {
            input.addEventListener("input", () => {
                checkValidaty(input);
                toggleButtonState(inputs, button);
            })
        })
    })
}
 export const configurations = {
    formSelector: ".popup__form",
    inputSelector: ".popup__content",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
}

enableValidation(configurations);

