import { Component, OnInit } from '@angular/core';
import { Playerstats } from '../model/playerstats';
import { RouterService } from '../services/router.service';
import { BackendinteractService } from '../services/backendinteract.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favPlayers: Array<Playerstats>;
  infoMessage: string;
  errorMessage: string;

  constructor(private backendInteractService: BackendinteractService,
    private routerService: RouterService) { }

  ngOnInit() {
    this.favPlayers = [];
    this.backendInteractService.getFavPlayersByUser(localStorage.getItem('userName')).subscribe(res => {
      
      this.favPlayers = res;
      if (this.favPlayers.length === 0) {
        this.errorMessage = null;
        this.infoMessage = 'No Favourite Players added';
      }
    }, error => {
      this.infoMessage = null;
      this.errorMessage = 'Internal Server Error! Please try after sometime..';
    });
  }

  displayPlayerStats(pid: string) {
    this.favPlayers.forEach(favPlayer => {
      if (favPlayer.pid === pid) {        
        this.routerService.routeToPlayerView(pid);
      }
    });
  }

}
