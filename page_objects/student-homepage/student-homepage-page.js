"use strict";
class StudentHomepage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get optionsLnk() { return $('#settings img'); }
    get logoutLnk() { return $('#logout div'); }
    get searchIcn() { return $('#search'); }
    get contentIFrame() {return $('#content-iframe'); }

}
module.exports = StudentHomepage;