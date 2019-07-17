import { browser, ElementFinder, element, by, promise } from 'protractor';

export class Registration {

    navigateToRegistrationPage() {
        return browser.get('/registration');
    }

    getCurrentURL() {
        return browser.getCurrentUrl();
    }

    getFirstNameInputBox(): ElementFinder {
        return element(by.name('firstName'));
    }

    isFirstNameInputBoxPresent(): promise.Promise<boolean> {
        return this.getFirstNameInputBox().isPresent();
    }

    getLastNameInputBox(): ElementFinder {
        return element(by.name('lastName'));
    }

    isLastNameInputBoxPresent(): promise.Promise<boolean> {
        return this.getLastNameInputBox().isPresent();
    }

    getContactNoInputBox(): ElementFinder {
        return element(by.name('contactNo'));
    }

    isContactNoInputBoxPresent(): promise.Promise<boolean> {
        return this.getContactNoInputBox().isPresent();
    }

    getUserNameInputBox(): ElementFinder {
        return element(by.name('userName'));
    }

    isUserNameInputBoxPresent(): promise.Promise<boolean> {
        return this.getUserNameInputBox().isPresent();
    }

    getPasswordInputBox(): ElementFinder {
        return element(by.name('password'));
    }

    isPasswordInputBoxPresent(): promise.Promise<boolean> {
        return this.getPasswordInputBox().isPresent();
    }

    getConfirmPasswordInputBox(): ElementFinder {
        return element(by.name('confirmPassword'));
    }

    isConfirmPasswordInputBoxPresent(): promise.Promise<boolean> {
        return this.getConfirmPasswordInputBox().isPresent();
    }

}
