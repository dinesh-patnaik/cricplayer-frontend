import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { HomeComponent } from '../home/home.component';
import { InteractService } from '../services/interact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  errorMsg: string;

  constructor(private authService: AuthenticationService, private routerService: RouterService, private interactService: InteractService) {
    this.user = new User();
  }

  ngOnInit() { }

  routeToRegistrationPage() {
    this.routerService.routeToRegistration();
  }

  authenticateUser(loginForm: NgForm) {
    this.user = loginForm.value;
    this.authService.validateUser(this.user).subscribe(response => {
      localStorage.setItem('token', response['token']);
      localStorage.setItem('userName', response['userName']);
      localStorage.setItem('expiresAt', response['expiresAt']);
      this.interactService.setCurrentState('true');
      this.routerService.routeToHome();
    }, error => {
      if (error.status == 401) {
        this.errorMsg = "Authorization Failed";
      } else if (error.status == 0) {
        this.errorMsg = "Server Unavailable";
      } else {
        this.errorMsg = "Internal Server Error";
      }
    });
    loginForm.resetForm();
  }

}
