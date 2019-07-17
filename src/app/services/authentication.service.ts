import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  result: Observable<User> ;

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:8500/api/v1/auth/register`, user);
  }

  validateUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:8500/api/v1/auth/login`, user);
  }

}
