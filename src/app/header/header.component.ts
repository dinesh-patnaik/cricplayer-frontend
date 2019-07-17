import { Component, OnInit } from '@angular/core';
import { InteractService } from '../services/interact.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTime: Date;
  expireTime: Date;

  isLoggedIn: boolean;

  constructor(private data: InteractService, private routerService: RouterService) {
    this.currentTime = new Date();
    this.expireTime = new Date(localStorage.getItem('expiresAt'));

    if ( (this.expireTime.getTime() != 0) && (this.currentTime.getTime() < this.expireTime.getTime()) ) {
      this.data.setCurrentState('true');
    }
    this.data.currentIsLoggedIn.subscribe(message => 
      {
        if(message == 'true'){
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      });
  }

  ngOnInit() { }

  signOut() {
    this.data.setCurrentState('false');
    localStorage.clear();
    this.routerService.routeToLogin();
  }

}
