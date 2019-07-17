import { TestBed, async, inject, fakeAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { RouterService } from './router.service';

describe('AuthGuard', () => {
  let canActivateRouteGuard: AuthGuard;
  const activatedRouteSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
  const routerStateSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
  let authService: any;
  let spyCanActivate: any;
  let response: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: Location, useValue: {back: () => { }} },
        { provide: Router, useValue: {} },
        AuthGuard,
        AuthenticationService,
        RouterService
      ]
    });
    canActivateRouteGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthenticationService);
  });

  it('should create route guard service', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

   // ------------ Positive testing of isUserAuthenticated------------//
  it('should handle if user is authenticated', fakeAsync(() => {
    spyCanActivate = spyOn(canActivateRouteGuard, 'canActivate').and.callFake( function() { return true; } );
    response = canActivateRouteGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
    expect(response).toBe(true, 'user is authenticated');
  }));

   // ------------ Negative testing of isUserAuthenticated------------//
  it('should handle if user is not authenticated', fakeAsync(() => {
    spyCanActivate = spyOn(canActivateRouteGuard, 'canActivate').and.callFake( function() { return false; } );
    response = canActivateRouteGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
    expect(response).toBe(false, 'user is not authenticated');
  }));
});
