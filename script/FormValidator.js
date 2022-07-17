export class FormValidator {
  constructor(setting, formElement) {
    this._setting = setting;
    this._formElement = formElement;
  }

  resetValidation = (inputs) => {
    inputs.forEach((inputs) => {
      this._hideError(inputs, this._setting);
    });
  };

  _showError = (input) => {
    const error = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    errorElement.classList.add(this._setting.errorClass);
  };

  _hideError = (input) => {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(this._setting.errorClass);
  };

  disableButton = (button) => {
    button.disabled = true;
    button.classList.add(this._setting.inactiveButtonClass);
  };

  _enableButton = (button) => {
    button.disabled = false;
    button.classList.remove(this._setting.inactiveButtonClass);
  };

  _checkValidaty = (input) => {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  };

  _setEventListeners = () => {
    const { inputSelector, submitButtonSelector } = this._setting;

    const inputs = [...this.formElement.querySelectorAll(inputSelector)];
    const button = this.formElement.querySelector(submitButtonSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidaty(input);
        this.toggleButtonState(inputs, button);
      });
    });
  };

  toggleButtonState = (inputs, button) => {
    const isFormValid = inputs.every((input) => input.validity.valid);
    if (isFormValid) {
      this._enableButton(button);
    } else {
      this.disableButton(button);
    }
  };

  _enableValidation() {
    const { inputSelector, submitButtonSelector } = this._setting;

    const forms = [...document.querySelectorAll(".popup__form")];
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => e.preventDefault());
      const inputs = [...form.querySelectorAll(inputSelector)];

      const button = form.querySelector(submitButtonSelector);
      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          this._checkValidaty(input);
          this.toggleButtonState(inputs, button);
        });
      });
    });
  }
}
