    "use strict";
class StudentHomepage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get optionsLnk() {return $('#settings');}
    get logoutLnk() {return $('#logout div');}
}
module.exports = StudentHomepage;