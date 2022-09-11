export class UserInfo {
    constructor({profileNameSelector, profileJobSelector}) {//{}
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        }
    }

    setUserInfo({name, aboutMe}) {
        console.log("setUserInfo", this)
        this._profileName.textContent = name;
        this._profileJob.textContent = aboutMe;
    }
}