"use strict";
class Homepage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get loginLnk() {return $('login-button');}
}
module.exports = Homepage;