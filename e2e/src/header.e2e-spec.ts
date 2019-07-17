import { Header } from './header.po';

describe('Header', () => {
    let page: Header;

    beforeEach(() => {
        page = new Header();
        page.navigateToLoginPage();
        page.mockCredentials();
        page.clickOnSignInLink();
    });

    it('Should Contain Navigation Links', () => {
        page.navigateToHomePage();
        expect(page.isNavBarPresent()).toBeTruthy(`<nav class="navbar navbar-expand-lg navbar-dark bg-info">
             should exist in header.component.html`);
    });

    it('Should Navigate to Home Page', () => {
        expect(page.getCurrentURL()).toContain('/home', 'Should Navigate to Home Page');
    });

    it('Should Navigate to Favourite Players Page', () => {
        page.clickOnFavouritePlayersLink();
        expect(page.getCurrentURL()).toContain('/favourites', 'Should Navigate to Favourite Players Page');
    });

    it('Should Navigate to Recommended Players Page', () => {
        page.clickOnRecommendedPlayersLink();
        expect(page.getCurrentURL()).toContain('/recommendations', 'Should Navigate to Recommended Players Page');
    });

});
