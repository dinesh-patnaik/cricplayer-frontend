import { Component, OnInit } from '@angular/core';
import { Playerstats } from '../model/playerstats';
import { BackendinteractService } from '../services/backendinteract.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  favPlayers: Array<Playerstats>;
  recommendedPlayers: Array<Playerstats>;
  infoMessage: string;
  errorMessage: string;

  constructor(private backendInteractService: BackendinteractService,
    private routerService: RouterService) { }

  ngOnInit() {
    this.getFilteredRecommendedPlayers();
  }

  displayPlayerStats(pid: string) {
    this.recommendedPlayers.forEach(recommendedPlayer => {
      if (recommendedPlayer.pid === pid) {
        this.routerService.routeToPlayerView(pid);
      }
    });
  }

  getFilteredRecommendedPlayers() {
    this.favPlayers = [];
    this.backendInteractService.getFavPlayersByUser(localStorage.getItem('userName')).subscribe(res => {
      this.favPlayers = res;
      this.recommendedPlayers = [];
      this.backendInteractService.getRecommendedPlayers(localStorage.getItem("userName")).subscribe(res => {
        this.recommendedPlayers = res;

        this.favPlayers.forEach(favPlayer => {
          this.recommendedPlayers = this.recommendedPlayers.filter(recommendedPlayer => recommendedPlayer.pid !== favPlayer.pid);
        });

        if (this.recommendedPlayers.length === 0) {
          this.errorMessage = null;
          this.infoMessage = 'No Recommended Players';
        }
      }, error => {
        this.infoMessage = null;
        this.errorMessage = 'Internal Server Error! Please try after sometime..';
      });

    }, error => {
      this.favPlayers = [];
      this.infoMessage = null;
      this.errorMessage = 'Internal Server Error! Please try after sometime..';
    });
  }

}
