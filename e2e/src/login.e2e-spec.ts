import { LoginPage } from './login.po';

describe('Login Page', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    it('Should Get User Name Input Box', () => {
        page.navigateToLoginPage();
        expect(page.isUserNameInputBoxPresent()).toBeTruthy(`<input type="text" class="form-control rounded-pill" placeholder="Username" [(ngModel)]="user.userName"
        name="userName" #userName="ngModel" required> should exist in login.component.html`);
    });

    it('Should Get Password Input Box', () => {
        page.navigateToLoginPage();
        expect(page.isPasswordInputBoxPresent()).toBeTruthy(`<input type="password" class="form-control rounded-pill" placeholder="Password" [(ngModel)]="user.password"
        name="password" #password="ngModel" required> should exist in login.component.html`);
    });

    it('Should Get Login Button', () => {
        page.navigateToLoginPage();
        expect(page.isLoginButtonPresent).toBeTruthy(`<button type="submit" class="btn btn-info rounded-pill" [disabled]="loginForm.invalid">Login</button> should exist in login.component.html`);
    });

    it('Default Values of User Name and Password should be Empty', () => {
        const emptyLoginValues = ['', ''];
        page.navigateToLoginPage();
        expect(page.getLoginInputBoxesDefaultValues()).toEqual(emptyLoginValues, `Default Values for Username
            and Password should be Empty`);
    });

});
