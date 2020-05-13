describe('Login', () => {
    it('should be able to login', () => {
        browser.url('./')
        // Type in username, password and click login
        $('[name="username"]').setValue('yourUsername');
        $('[name="password"]').setValue('yourPassword');
        $('div=Log In').click();
        // Wait for nasty modal to show up and click Not now button
        $('button=Not Now').waitForDisplayed(timeout, false, 'Not now modal was not displayed');
        $('button=Not Now').click();
        // Verify use was logged in by waiting fof profile icon and suggested for you label
        $('[aria-label="Profile"]').waitForDisplayed(timeout, false, 'Profile icon was not displayed');
        $('h4=Suggestions For You').waitForDisplayed(timeout, false, 'Suggested for your label was not displayed');
    })
})