import { browser, by, element, ElementFinder, promise } from 'protractor';

export class Header {

    navigateToLoginPage() {
        return browser.get('/login');
    }

    getMockLoginDetails(): any {
        const loginDetail: any = { userName: 'diny4804', password: '123456' };
        return loginDetail;
    }

    mockCredentials(): any {
        const login: any = this.getMockLoginDetails();
        this.getUserNameInput().sendKeys(login.userName);
        this.getPasswordInput().sendKeys(login.password);
        return Object.keys(login).map(key => login[key]);
    }

    getUserNameInput(): ElementFinder {
        return element(by.name('userName'));
    }

    getPasswordInput(): ElementFinder {
        return element(by.name('password'));
    }

    navigateToHomePage() {
        return browser.get('/home');
    }

    getNavBarLink(): ElementFinder {
        return element(by.className('navbar'));
    }

    isNavBarPresent(): promise.Promise<boolean> {
        return this.getNavBarLink().isPresent();
    }

    clickOnSignInLink(): promise.Promise<void> {
        return this.getSignInLink().click();
    }

    getSignInLink(): ElementFinder {
        return element(by.buttonText('Login'));
    }

    clickOnSignUpLink(): promise.Promise<void> {
        return this.getSignUpLink().click();
    }

    getSignUpLink(): ElementFinder {
        return element(by.linkText('Register'));
    }

    clickOnHomeLink(): promise.Promise<void> {
        return this.getHomeLink().click();
    }

    getHomeLink(): ElementFinder {
        return element(by.buttonText('Home'));
    }

    clickOnFavouritePlayersLink(): promise.Promise<void> {
        return this.getFavouritePlayersLink().click();
    }

    getFavouritePlayersLink(): ElementFinder {
        return element(by.buttonText('Favourite Players'));
    }

    clickOnRecommendedPlayersLink(): promise.Promise<void> {
        return this.getRecommendedPlayersLink().click();
    }

    getRecommendedPlayersLink(): ElementFinder {
        return element(by.buttonText('Recommended Players'));
    }

    getCurrentURL() {
        return browser.getCurrentUrl();
    }

}
