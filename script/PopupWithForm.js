import { Popup } from "../script/Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler ) {
        super(popupSelector);
        this.submitHandler= submitHandler;
        //this.submitHandler(this._getInputValues()) //= submitHandler;
        this._form = this._popup.querySelector(".popup__form");
    }
        _getInputValues() {
            const inputValues = {}
            const inputs = [...this._form.querySelectorAll(".popup__content")]
            inputs.forEach(input => {
                inputValues[input.name] = input.value
            })
            return inputValues;
        }

        setEventListeners() {
            //const form = this._popup.querySelector("")
            this._form.addEventListener("submit", (e) => {
                e.preventDefault()
                this.submitHandler(this._getInputValues())
                this.close();
            })
            super.setEventListeners();
        }

        close() {
           // const form = this._popup.querySelector("")
            this_form.reset();
            super.close();
        }
}