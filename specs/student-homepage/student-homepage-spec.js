const LoginPage = require('../../page_objects/login/login-page');
const StudentHomepage = require('../../page_objects/student-homepage/student-homepage-page');

describe('Logout', () => {
    // This hook runs only once before all tests
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage();
        this.studentHomepage = new StudentHomepage();
    });

    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('should be able to logout', () => {
        this.loginPage.login('3y6u4ekk+QA@mail.ru', 'tuktotakou14')
        this.studentHomepage.contentIFrame.waitForExist();
        browser.switchToFrame(this.studentHomepage.contentIFrame);
        this.studentHomepage.optionsLnk.waitForClickable();
        this.studentHomepage.optionsLnk.moveTo();
        browser.pause(5000);
        this.studentHomepage.optionsLnk.doubleClick();
        this.studentHomepage.logoutLnk.waitForClickable();
        this.studentHomepage.logoutLnk.click();
    });
});

