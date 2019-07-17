import { browser, by, element, ElementFinder, promise } from 'protractor';

export class LoginPage {

    // Navigate to SignIn Page
    navigateToLoginPage() {
        return browser.get('/login');
    }

    // Get Current URL
    getCurrentURL() {
        return browser.getCurrentUrl();
    }

    // Get User Name Input Box
    getUserNameInputBox(): ElementFinder {
        return element(by.name('userName'));
    }

    // Check Username Input Box is Exist or Not
    isUserNameInputBoxPresent(): promise.Promise<boolean> {
        return this.getUserNameInputBox().isPresent();
    }

    // get password input box
    getPasswordInputBox(): ElementFinder {
        return element(by.name('password'));
    }

    // Check Password Input Box is Exist or Not
    isPasswordInputBoxPresent(): promise.Promise<boolean> {
        return this.getPasswordInputBox().isPresent();
    }

    // Get Login Component
    getloginComponent(): ElementFinder {
        return element(by.tagName('app-login'));
    }

    // Get Submit Button
    getLoginButton(): ElementFinder {
        return this.getloginComponent().element(by.buttonText('Login'));
    }

    // Check Login Button is Exist or Not
    isLoginButtonPresent(): promise.Promise<boolean> {
        return this.getLoginButton().isPresent();
    }

    // Default values of Input Boxes
    getLoginInputBoxesDefaultValues(): any {
        let inputUsername, inputPassword;
        inputUsername = this.getUserNameInputBox().getAttribute('value');
        inputPassword = this.getPasswordInputBox().getAttribute('value');
        return Promise.all([inputUsername, inputPassword]).then((values) => {
            return values;
        });
    }
}
