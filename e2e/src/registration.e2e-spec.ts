import { Registration } from './registration.po';


describe('Registration Page', () => {
    let page: Registration;

    beforeEach(() => {
        page = new Registration();
        page.navigateToRegistrationPage();
    });

    it('Should Get First Name Input Box', () => {
        expect(page.isFirstNameInputBoxPresent()).toBeTruthy(`<input type="text" class="form-control rounded-pill" placeholder="First Name" [(ngModel)]="user.firstName"
        name="firstName" #firstName="ngModel" required minlength="3" maxlength="15"> should exist in registration.component.html`);
    });

    it('Should Get Last Name Input Box', () => {
        expect(page.isLastNameInputBoxPresent()).toBeTruthy(`<input type="text" class="form-control rounded-pill" placeholder="Last Name" [(ngModel)]="user.lastName"
        name="lastName" #lastName="ngModel" required maxlength="12"> should exist in registration.component.html`);
    });

    it('Should Get Contact No Input Box', () => {
        expect(page.isContactNoInputBoxPresent()).toBeTruthy(`<input type="text" class="form-control rounded-pill" placeholder="Contact Number"
        [(ngModel)]="user.contactNo" name="contactNo" #contactNo="ngModel" required minlength="10" maxlength="10"> should exist in registration.component.html`);
    });

    it('Should Get User Name Input Box', () => {
        expect(page.isUserNameInputBoxPresent()).toBeTruthy(`<input type="text" class="form-control rounded-pill" placeholder="Username" [(ngModel)]="user.userName"
        name="userName" #userName="ngModel" required minlength="6" maxlength="20"> should exist in registration.component.html`);
    });

    it('Should Get Password Input Box', () => {
        expect(page.isPasswordInputBoxPresent()).toBeTruthy(`<input type="password" class="form-control rounded-pill" placeholder="Password" [(ngModel)]="user.password"
        name="password" #password="ngModel" required minlength="6" maxlength="12"> should exist in registration.component.html`);
    });

    it('Should Get Confirm Password Input Box', () => {
        expect(page.isConfirmPasswordInputBoxPresent()).toBeTruthy(`<input type="password" class="form-control rounded-pill" placeholder="Confirm Password"
        [(ngModel)]="user.confirmPassword" name="confirmPassword" #confirmPassword="ngModel" required
        minlength="6" maxlength="12"> should exist in registration.component.html`);
    });

});
