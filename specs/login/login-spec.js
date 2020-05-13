const assert = require('assert')
const LoginPage = require('../../page_objects/login/login-page');
// const CommonPage = require('../../page_objects/common/common-page');
const Homepage = require('../../page_objects/homepage/homepage-page');
describe('Login', () => {
    // This hook runs only once before all tests
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage();
        // this.commonPage = new CommonPage();
        this.homepage = new Homepage();
    });
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });
    it('should be able to login', () => {
        browser.url('./')
        this.homepage.loginLnk.waitForClickable();
        this.homepage.loginLnk.click();
        // Type in username, password and click login
        this.loginPage.usernameTxt.setValue('3y6u4ekk+QA@mail.ru');
        this.loginPage.passwordTxt.setValue('tuktotakou14');
        this.loginPage.loginLnk.click();
        browser.debug();
    });
});