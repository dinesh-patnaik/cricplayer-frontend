import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;
  signupForm: NgForm;
  successMsg: string;
  errorMsg: string;

  constructor(private authService: AuthenticationService, private routerService: RouterService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  registerUser(signupForm: NgForm) {
    this.user = signupForm.value;
    this.authService.registerUser(this.user).subscribe(response => {
      this.successMsg = "User Registration Successful! Please Login";
      this.errorMsg = null;
    }, error => {
      if (error.status == 409) {
        this.successMsg = null;
        this.errorMsg = "User Already Exists!";
      } else if (error.status == 0) {
        this.successMsg = null;
        this.errorMsg = "Server Unavailable";
      } else {
        this.successMsg = null;
        this.errorMsg = "Internal Server Error";
      }
    });
    signupForm.resetForm();
  }

  redirectToLogin() {
    this.routerService.routeToLogin();
  }

}
