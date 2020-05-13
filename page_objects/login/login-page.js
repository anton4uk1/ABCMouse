"use strict";

const Homepage = require('../../page_objects/homepage/homepage-page');


class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get usernameTxt() { return $('#login_email'); }
    get passwordTxt() { return $('#login_password'); }
    get loginLnk() { return $('.submit_button.aofl_century_bold'); }

    constructor() {
        this.homepage = new Homepage();
    }

    // Helper method to avoid code duplication
    login(username, password) {
        browser.url('./')
        this.homepage.loginLnk.waitForClickable();
        this.homepage.loginLnk.click();
        browser.debug();
        // Type in username, password and click login
        this.usernameTxt.setValue(username);
        this.passwordTxt.setValue(password);
        this.loginLnk.click();
    }
}
module.exports = Login;