import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  routeToHome() {
    this.router.navigate(['home']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToRegistration() {
    this.router.navigate(['registration']);
  }

  routeToFavourites() {
    this.router.navigate(['favourites']);
  }

  routeToRecommendations() {
    this.router.navigate(['recommendations']);
  }

  routeToPlayerView(pid: String) {            
    this.router.navigate(['playerInfo', pid]);
  }

}