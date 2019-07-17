import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Playerstats } from '../model/playerstats';
import { Player } from '../model/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CricapiserviceService {

  playerSubject: BehaviorSubject<Playerstats>;

  constructor(private httpClient: HttpClient) { }

  searchPlayerByName(name: string): Observable<Array<Player>> {
    return this.httpClient.get<any>(`http://cricapi.com/api/playerFinder?name=${name}&apikey=F6AxfG2Ig9cmOSMk9fzsfounVew2`);
  }

  getPlayerStats(pid: string): Observable<Playerstats> {
    return this.httpClient.get<Playerstats>(`https://cricapi.com/api/playerStats?pid=${pid}&apikey=F6AxfG2Ig9cmOSMk9fzsfounVew2`);
  }
}
