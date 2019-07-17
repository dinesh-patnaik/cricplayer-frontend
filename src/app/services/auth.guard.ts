import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from './router.service';
import { InteractService } from './interact.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentTime: Date;
  expireTime: Date;

  constructor(private data: InteractService, private routerService: RouterService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.currentTime = new Date();
    this.expireTime = new Date(localStorage.getItem('expiresAt'));

    if ((this.expireTime.getTime() != 0) && (this.currentTime.getTime() < this.expireTime.getTime())) {
      return true;
    }
    this.data.setCurrentState('false');
    localStorage.clear();
    this.routerService.routeToLogin();
    return false;
  }
}
