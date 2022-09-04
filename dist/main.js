(() => {
  "use strict";
  const e = (e) => {
      e.target.classList.contains("popup") &&
        (document.querySelector(".popup_open"), t(e.target));
    },
    t = (t) => {
      t.classList.remove("popup_open"),
        document.removeEventListener("keydown", o),
        document.removeEventListener("mousedown", e);
    },
    o = (e) => {
      if ("Escape" === e.key) {
        const e = document.querySelector(".popup_open");
        t(e);
      }
    },
    n = (t) => {
      t.classList.add("popup_open"),
        document.addEventListener("keydown", o),
        document.addEventListener("mousedown", e);
    },
    s = document.querySelector(".popup__img-preview"),
    r = document.querySelector(".popup__header-img"),
    i = document.querySelector(".popup_type_image-preview");
  class l {
    constructor(e, t, o) {
      (this._name = e.name),
        (this._link = e.link),
        (this._handleCardClick = o),
        (this._templateCardSelector = t);
    }
    _handleIamgeClick = () => {
      (s.src = this._link),
        (s.alt = `photo of ${this._name}`),
        (r.textContent = this._name),
        n(i);
    };
    _getElement = () =>
      document
        .querySelector(this._templateCardSelector)
        .content.querySelector(".card__list-item")
        .cloneNode(!0);
    _toggleLikeButton = (e) => {
      e.target.classList.toggle("card__button_type_active");
    };
    _handleDelete = () => {
      this._cardElement.remove();
    };
    createCard() {
      this._cardElement = this._getElement();
      const e = this._cardElement.querySelector(".card__img"),
        t = this._cardElement.querySelector(".card__title"),
        o = this._cardElement.querySelector(".card__button_type_delete"),
        n = this._cardElement.querySelector(".card__button_type-like");
      return (
        (e.src = this._link),
        (e.alt = `photo of ${this._name}`),
        (t.textContent = this._name),
        n.addEventListener("click", this._toggleLikeButton),
        o.addEventListener("click", this._handleDelete),
        e.addEventListener("click", this._handleCardClick),
        this._cardElement
      );
    }
  }
  class p {
    constructor(e, t) {
      (this._setting = e),
        (this._formElement = t),
        (this._inputs = Array.from(
          this._formElement.querySelectorAll(e.inputSelector)
        )),
        (this._button = this._formElement.querySelector(
          e.submitButtonSelector
        ));
    }
    resetValidation = () => {
      this._inputs.forEach((e) => {
        this._hideError(e, this._setting);
      });
    };
    _showError = (e) => {
      const t = e.validationMessage,
        o = document.querySelector(`#${e.id}-error`);
      (o.textContent = t), o.classList.add(this._setting.errorClass);
    };
    _hideError = (e) => {
      const t = document.querySelector(`#${e.id}-error`);
      (t.textContent = ""), t.classList.remove(this._setting.errorClass);
    };
    disableButton = () => {
      (this._button.disabled = !0),
        this._button.classList.add(this._setting.inactiveButtonClass);
    };
    _enableButton = () => {
      (this._button.disabled = !1),
        this._button.classList.remove(this._setting.inactiveButtonClass);
    };
    _toggleInputError = (e) => {
      e.validity.valid ? this._hideError(e) : this._showError(e);
    };
    _setEventListeners = () => {
      this._inputs.forEach((e) => {
        e.addEventListener("input", () => {
          this._toggleInputError(e),
            this.toggleButtonState(this._inputs, this._button);
        });
      });
    };
    _isValid = () => this._inputs.every((e) => e.validity.valid);
    toggleButtonState = () => {
      this._isValid()
        ? this._enableButton(this._button)
        : this.disableButton(this._button);
    };
    enableValidation() {
      this._formElement.addEventListener("submit", (e) => e.preventDefault()),
        this._inputs.forEach((e) => {
          e.addEventListener("input", () => {
            this._toggleInputError(e), this.toggleButtonState();
          });
        });
    }
  }
  class c {
    constructor(e) {
      (this._popup = document.querySelector(e)),
        (this.close = this.close.bind(this));
    }
    open() {
      this._popup.classList.add("popup_open"),
        document.addEventListener("click", this._handleOverlayClose),
        document.addEventListener("keydown", this._handleEscClose);
    }
    close = () => {
      this._popup.classList.remove("popup_open"),
        document.removeEventListener("click", this._handleOverlayClose),
        document.removeEventListener("keydown", this._handleEscClose);
    };
    _handleEscClose = (e) => {
      "Escape" === e.key && this.close();
    };
    _handleOverlayClose = (e) => {
      e.target.classList.contains("popup") && this.close();
    };
    setEventListeners() {
      this._popup
        .querySelector(".popup__close")
        .addEventListener("click", this.close);
    }
  }
  class a extends c {
    constructor(e, t) {
      super(e),
        (this.submitHandler = t),
        (this._form = this._popup.querySelector(".popup__form"));
    }
    _getInputValues() {
      const e = {};
      return (
        [...this._form.querySelectorAll(".popup__content")].forEach((t) => {
          e[t.name] = t.value;
        }),
        e
      );
    }
    setEventListeners() {
      this._form.addEventListener("submit", (e) => {
        e.preventDefault(),
          this.submitHandler(this._getInputValues()),
          this.close();
      }),
        super.setEventListeners();
    }
    close() {
      this_form.reset(), super.close();
    }
  }
  const _ = [
      {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
      },
      {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
      },
      {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
      },
      {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg",
      },
      {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
      },
      {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg",
      },
    ],
    u = document.querySelector(".element__list");
  new (class {
    constructor({ items: e, renderer: t }, o) {
      (this._items = e), (this._renderer = t);
    }
    addItem(e) {
      this._container.prepend(e);
    }
    render() {
      this._items.forEach((e) => {
        this._renderer(e);
      });
    }
  })({ items: [_], renderer: () => {} }, u).render();
  const d = new (class {
      constructor({ profileNameSelector: e, profileJobSelector: t }) {
        (this._profileName = document.querySelector(e)),
          (this._profileJob = document.querySelector(t));
      }
      getUserInfo() {
        return {
          name: this._profileName.textContent,
          job: this._profileJob.textContent,
        };
      }
      setUserInfo({ name: e, aboutMe: t }) {
        console.log("setUserInfo", this),
          (this._profileName.textContent = e),
          (this._profileJob.textContent = t);
      }
    })({
      profileNameSelector: ".profile__name",
      profileJobSelector: ".profile__explorer",
    }),
    m = new (class extends c {
      constructor(e) {
        super(e),
          (this._imageElement = this._popup.querySelector(
            ".popup__img-preview"
          )),
          (this._imageCaption =
            this._popup.querySelector(".popup__header-img"));
      }
      open(e, t) {
        (this._imageElement.src = e),
          (this._imageElement.alt = `${t}`),
          (this._imageCaption.textContent = t),
          super.open();
      }
    })(".popup_type_image-preview");
  m.setEventListeners();
  const h = new a(".popup_type-edit", (e) => {
    d.setUserInfo(e);
  });
  h.setEventListeners(),
    new a(".popup_type_add-card", (e) => {
      const t = { name: e.placeName, link: e.link };
      I(t), console.log("data", e);
    }).setEventListeners();
  const y = {
      inputSelector: ".popup__content",
      submitButtonSelector: ".popup__save",
      inactiveButtonClass: "popup__save_disabled",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__error_visible",
    },
    v = document.querySelector(".popup__form_type-add"),
    E = document.querySelector(".popup__form_type-profile"),
    g = new p(y, v),
    S = new p(y, E);
  g.enableValidation(), S.enableValidation();
  const f = document.querySelector(".popup_type-edit"),
    b = document.querySelector(".popup_type_add-card"),
    L = document.querySelector(".popup_type_image-preview"),
    q =
      (document.querySelector(".popup__form_type-profile"),
      document.querySelector(".popup__content_type_name"),
      document.querySelector(".popup__content_type_about-me"),
      document.querySelector(".popup__form_type-add")),
    k =
      (document.querySelector(".popup__content_type_img-title"),
      document.querySelector(".popup__content_type_img-link"),
      document.querySelector(".profile__edit-button")),
    C = document.querySelector(".popup__close_type-proile"),
    w = document.querySelector(".popup__close_type_image-preview"),
    x = document.querySelector(".profile__add-button"),
    B = document.querySelector(".popup__close_type_add");
  document.querySelector(".profile__name"),
    document.querySelector(".profile__explorer");
  const I = (e) => {
    const t = new l((o = e), "#card__template", () => {
      m.open(o.link, o.name);
    }).createCard();
    var o;
    u.prepend(t);
  };
  _.forEach(I),
    x.addEventListener("click", function () {
      n(b), g.disableButton();
    }),
    k.addEventListener("click", () => {
      d.getUserInfo(), h.open();
    }),
    C.addEventListener("click", () => {
      t(f);
    }),
    w.addEventListener("click", () => {
      t(L);
    }),
    B.addEventListener("click", () => {
      t(b);
    }),
    q.addEventListener("submit", function (e) {
      t(b), q.reset();
    });
})();
