import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playerstats } from '../model/playerstats';

@Injectable({
  providedIn: 'root'
})
export class BackendinteractService {

  authToken: String;
  
  constructor(private httpClient: HttpClient) {
    this.authToken = localStorage.getItem("token");
  }

  getFavPlayersByUser(userName: string): Observable<Array<Playerstats>> {
    return this.httpClient.get<Array<Playerstats>>(`http://localhost:8765/favouriteservice/api/v1/favourites/favplayers/${userName}?Authorization=${this.authToken}`);
  }

  addFavPlayerToUser(playerStats: Playerstats, userName: string): Observable<String> {
    return this.httpClient.post<String>(`http://localhost:8765/favouriteservice/api/v1/favourites/save/${userName}?Authorization=${this.authToken}`, playerStats);
  }

  getRecommendedPlayers(userName: string): Observable<Array<Playerstats>> {
    return this.httpClient.get<Array<Playerstats>>(`http://localhost:8765/recommendationservice/api/v1/recommendations/players?Authorization=${this.authToken}`);
  }

  isFavouritePlayer(pid: string, userName: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`http://localhost:8765/favouriteservice/api/v1/favourites/isFavourite/${pid}/${userName}?Authorization=${this.authToken}`);
  }

}
