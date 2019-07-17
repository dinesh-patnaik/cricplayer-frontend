import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { Playerstats } from '../model/playerstats';
import { FormControl, NgForm } from '@angular/forms';
import { CricapiserviceService } from '../services/cricapiservice.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  submitMessage: string;
  errorMessage: string;
  infoMessage: string;
  name = new FormControl('');
  players: Array<Player>;
  playerStats: Playerstats;

  constructor(private cricapi: CricapiserviceService,
    private routerService: RouterService) {
  }

  ngOnInit() { }

  searchPlayer() {
    if (this.name.value === '') {
      this.infoMessage = null;
      this.errorMessage = null;
      this.submitMessage = 'Please enter a Player Name to search';
      this.players = [];
    } else {
      this.cricapi.searchPlayerByName(this.name.value).subscribe(res => {
        this.players = res['data'].filter(function(player) {
          return (player.pid != null && player.pid != '') ;
        });
        if (this.players.length == 0) {
          this.submitMessage = null;
          this.errorMessage = null;
          this.infoMessage = 'No Results Found';
        } else {
          this.submitMessage = null;
          this.errorMessage = null;
          this.infoMessage = 'Search Results';
        }
      }, error => {
        this.submitMessage = null;
        this.infoMessage = null;
        this.errorMessage = 'Internal Server Error While Fetching Data';
      });
    }
  }

  routeToPlayerView(pid: String) {
    this.routerService.routeToPlayerView(pid);
  }

}
