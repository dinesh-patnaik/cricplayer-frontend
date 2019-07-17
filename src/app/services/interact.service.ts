import { Injectable } from '@angular/core';
import { Playerstats } from '../model/playerstats';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  playerStats: Playerstats;

  private isLoggedIn = new BehaviorSubject('');
  currentIsLoggedIn = this.isLoggedIn.asObservable();

  constructor() { }

  setCurrentState(isLoggedIn: string){
    this.isLoggedIn.next(isLoggedIn);
  }
  
}
