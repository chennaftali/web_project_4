export class UserInfo {
    constructor({profileNameSelector, profileJobSelector}) {//{}
        this.profileName = document.querySelector(profileNameSelector);
        this.profileJob = document.querySelector(profileJobSelector);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        }
    }

    setUserInfo({name, about}) {
        console.log("setUserInfo", this)
        this._profileName.textContent = profileName;
        this._profileJob.textContent = profileJob;
    }
}