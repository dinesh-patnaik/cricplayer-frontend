import { Component, OnInit } from '@angular/core';
import { InteractService } from '../services/interact.service';
import { RouterService } from '../services/router.service';
import { Playerstats } from '../model/playerstats';
import { BackendinteractService } from '../services/backendinteract.service';
import { ActivatedRoute } from '@angular/router';
import { CricapiserviceService } from '../services/cricapiservice.service';
import { Data } from '../model/data';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerStats: Playerstats;
  errorMessage: string;
  pid: string;
  isFavourite: boolean;

  constructor(private cricapi: CricapiserviceService,
    private routerService: RouterService,
    private backendInteract: BackendinteractService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.pid = params['pid']);
    this.getPlayerStats(this.pid);
  }

  ngOnInit() {

  }

  routeToHome() {
    this.routerService.routeToHome();
  }

  addToFavPlayer() {
    this.backendInteract.addFavPlayerToUser(this.playerStats, localStorage.getItem('userName')).subscribe(res => {
      this.routerService.routeToFavourites();
    }, err => {
      if (err.status === 409) {
        this.errorMessage = `*Player already added under favourites`;
      } else {
        this.errorMessage = 'Internal Server Error while adding player to Favourites! Please try again.. ';
      }
    }
    );
  }

  getPlayerStats(pid: string) {

    this.backendInteract.isFavouritePlayer(this.pid, localStorage.getItem("userName")).subscribe(res => {
      this.isFavourite = res;
    });

    this.cricapi.getPlayerStats(pid).subscribe(res => {
      this.playerStats = res;

      this.playerStats.data.bowling.firstclass = {
        tenper: '', fiveper: '', fourper: '', sr: '', econ: '', ave: '', bbm: '', bbi: '',
        wkts: '', runs: '', balls: '', inns: '', mat: ''
      };

      this.playerStats.data.bowling.lista = {
        tenper: '', fiveper: '', fourper: '', sr: '', econ: '', ave: '', bbm: '', bbi: '',
        wkts: '', runs: '', balls: '', inns: '', mat: ''
      };

      this.playerStats.data.bowling.t20s = {
        tenper: '', fiveper: '', fourper: '', sr: '', econ: '', ave: '', bbm: '', bbi: '',
        wkts: '', runs: '', balls: '', inns: '', mat: ''
      };

      this.playerStats.data.bowling.odis = {
        tenper: '', fiveper: '', fourper: '', sr: '', econ: '', ave: '', bbm: '', bbi: '',
        wkts: '', runs: '', balls: '', inns: '', mat: ''
      };

      this.playerStats.data.bowling.testms = {
        tenper: '', fiveper: '', fourper: '', sr: '', econ: '', ave: '', bbm: '', bbi: '',
        wkts: '', runs: '', balls: '', inns: '', mat: ''
      };

      this.playerStats.data.batting.firstclass = {
        fifties: '', centuries: '', st: '', ct: '', sixs: '', fours: '', sr: '', bf: '', ave: '',
        hs: '', runs: '', no: '', inns: '', mat: ''
      };

      this.playerStats.data.batting.lista = {
        fifties: '', centuries: '', st: '', ct: '', sixs: '', fours: '', sr: '', bf: '', ave: '',
        hs: '', runs: '', no: '', inns: '', mat: ''
      };

      this.playerStats.data.batting.t20s = {
        fifties: '', centuries: '', st: '', ct: '', sixs: '', fours: '', sr: '', bf: '', ave: '',
        hs: '', runs: '', no: '', inns: '', mat: ''
      };

      this.playerStats.data.batting.odis = {
        fifties: '', centuries: '', st: '', ct: '', sixs: '', fours: '', sr: '', bf: '', ave: '',
        hs: '', runs: '', no: '', inns: '', mat: ''
      };

      this.playerStats.data.batting.testms = {
        fifties: '', centuries: '', st: '', ct: '', sixs: '', fours: '', sr: '', bf: '', ave: '',
        hs: '', runs: '', no: '', inns: '', mat: ''
      };

      if (res['data']['bowling']['T20Is'] !== undefined) {
        this.playerStats.data.bowling.t20s.tenper = res['data']['bowling']['T20Is']['10'];
        this.playerStats.data.bowling.t20s.fiveper = res['data']['bowling']['T20Is']['5w'];
        this.playerStats.data.bowling.t20s.fourper = res['data']['bowling']['T20Is']['4w'];
        this.playerStats.data.bowling.t20s.sr = res['data']['bowling']['T20Is']['SR'];
        this.playerStats.data.bowling.t20s.econ = res['data']['bowling']['T20Is']['Econ'];
        this.playerStats.data.bowling.t20s.ave = res['data']['bowling']['T20Is']['Ave'];
        this.playerStats.data.bowling.t20s.bbm = res['data']['bowling']['T20Is']['BBM'];
        this.playerStats.data.bowling.t20s.bbi = res['data']['bowling']['T20Is']['BBI'];
        this.playerStats.data.bowling.t20s.wkts = res['data']['bowling']['T20Is']['Wkts'];
        this.playerStats.data.bowling.t20s.runs = res['data']['bowling']['T20Is']['Runs'];
        this.playerStats.data.bowling.t20s.balls = res['data']['bowling']['T20Is']['Balls'];
        this.playerStats.data.bowling.t20s.inns = res['data']['bowling']['T20Is']['Inns'];
        this.playerStats.data.bowling.t20s.mat = res['data']['bowling']['T20Is']['Mat'];
      }

      if (res['data']['bowling']['ODIs'] !== undefined) {
        this.playerStats.data.bowling.odis.tenper = res['data']['bowling']['ODIs']['10'];
        this.playerStats.data.bowling.odis.fiveper = res['data']['bowling']['ODIs']['5w'];
        this.playerStats.data.bowling.odis.fourper = res['data']['bowling']['ODIs']['4w'];
        this.playerStats.data.bowling.odis.sr = res['data']['bowling']['ODIs']['SR'];
        this.playerStats.data.bowling.odis.econ = res['data']['bowling']['ODIs']['Econ'];
        this.playerStats.data.bowling.odis.ave = res['data']['bowling']['ODIs']['Ave'];
        this.playerStats.data.bowling.odis.bbm = res['data']['bowling']['ODIs']['BBM'];
        this.playerStats.data.bowling.odis.bbi = res['data']['bowling']['ODIs']['BBI'];
        this.playerStats.data.bowling.odis.wkts = res['data']['bowling']['ODIs']['Wkts'];
        this.playerStats.data.bowling.odis.runs = res['data']['bowling']['ODIs']['Runs'];
        this.playerStats.data.bowling.odis.balls = res['data']['bowling']['ODIs']['Balls'];
        this.playerStats.data.bowling.odis.inns = res['data']['bowling']['ODIs']['Inns'];
        this.playerStats.data.bowling.odis.mat = res['data']['bowling']['ODIs']['Mat'];
      }

      if (res['data']['bowling']['tests'] !== undefined) {
        this.playerStats.data.bowling.testms.tenper = res['data']['bowling']['tests']['10'];
        this.playerStats.data.bowling.testms.fiveper = res['data']['bowling']['tests']['5w'];
        this.playerStats.data.bowling.testms.fourper = res['data']['bowling']['tests']['4w'];
        this.playerStats.data.bowling.testms.sr = res['data']['bowling']['tests']['SR'];
        this.playerStats.data.bowling.testms.econ = res['data']['bowling']['tests']['Econ'];
        this.playerStats.data.bowling.testms.ave = res['data']['bowling']['tests']['Ave'];
        this.playerStats.data.bowling.testms.bbm = res['data']['bowling']['tests']['BBM'];
        this.playerStats.data.bowling.testms.bbi = res['data']['bowling']['tests']['BBI'];
        this.playerStats.data.bowling.testms.wkts = res['data']['bowling']['tests']['Wkts'];
        this.playerStats.data.bowling.testms.runs = res['data']['bowling']['tests']['Runs'];
        this.playerStats.data.bowling.testms.balls = res['data']['bowling']['tests']['Balls'];
        this.playerStats.data.bowling.testms.inns = res['data']['bowling']['tests']['Inns'];
        this.playerStats.data.bowling.testms.mat = res['data']['bowling']['tests']['Mat'];
      }

      if (res['data']['batting']['T20Is'] !== undefined) {
        this.playerStats.data.batting.t20s.fifties = res['data']['batting']['T20Is']['50'];
        this.playerStats.data.batting.t20s.centuries = res['data']['batting']['T20Is']['100'];
        this.playerStats.data.batting.t20s.st = res['data']['batting']['T20Is']['St'];
        this.playerStats.data.batting.t20s.ct = res['data']['batting']['T20Is']['Ct'];
        this.playerStats.data.batting.t20s.sixs = res['data']['batting']['T20Is']['6s'];
        this.playerStats.data.batting.t20s.fours = res['data']['batting']['T20Is']['4s'];
        this.playerStats.data.batting.t20s.sr = res['data']['batting']['T20Is']['SR'];
        this.playerStats.data.batting.t20s.bf = res['data']['batting']['T20Is']['BF'];
        this.playerStats.data.batting.t20s.ave = res['data']['batting']['T20Is']['Ave'];
        this.playerStats.data.batting.t20s.hs = res['data']['batting']['T20Is']['HS'];
        this.playerStats.data.batting.t20s.runs = res['data']['batting']['T20Is']['Runs'];
        this.playerStats.data.batting.t20s.no = res['data']['batting']['T20Is']['NO'];
        this.playerStats.data.batting.t20s.inns = res['data']['batting']['T20Is']['Inns'];
        this.playerStats.data.batting.t20s.mat = res['data']['batting']['T20Is']['Mat'];
      }

      if (res['data']['batting']['ODIs'] !== undefined) {
        this.playerStats.data.batting.odis.fifties = res['data']['batting']['ODIs']['50'];
        this.playerStats.data.batting.odis.centuries = res['data']['batting']['ODIs']['100'];
        this.playerStats.data.batting.odis.st = res['data']['batting']['ODIs']['St'];
        this.playerStats.data.batting.odis.ct = res['data']['batting']['ODIs']['Ct'];
        this.playerStats.data.batting.odis.sixs = res['data']['batting']['ODIs']['6s'];
        this.playerStats.data.batting.odis.fours = res['data']['batting']['ODIs']['4s'];
        this.playerStats.data.batting.odis.sr = res['data']['batting']['ODIs']['SR'];
        this.playerStats.data.batting.odis.bf = res['data']['batting']['ODIs']['BF'];
        this.playerStats.data.batting.odis.ave = res['data']['batting']['ODIs']['Ave'];
        this.playerStats.data.batting.odis.hs = res['data']['batting']['ODIs']['HS'];
        this.playerStats.data.batting.odis.runs = res['data']['batting']['ODIs']['Runs'];
        this.playerStats.data.batting.odis.no = res['data']['batting']['ODIs']['NO'];
        this.playerStats.data.batting.odis.inns = res['data']['batting']['ODIs']['Inns'];
        this.playerStats.data.batting.odis.mat = res['data']['batting']['ODIs']['Mat'];
      }

      if (res['data']['batting']['tests'] !== undefined) {
        this.playerStats.data.batting.testms.fifties = res['data']['batting']['tests']['50'];
        this.playerStats.data.batting.testms.centuries = res['data']['batting']['tests']['100'];
        this.playerStats.data.batting.testms.st = res['data']['batting']['tests']['St'];
        this.playerStats.data.batting.testms.ct = res['data']['batting']['tests']['Ct'];
        this.playerStats.data.batting.testms.sixs = res['data']['batting']['tests']['6s'];
        this.playerStats.data.batting.testms.fours = res['data']['batting']['tests']['4s'];
        this.playerStats.data.batting.testms.sr = res['data']['batting']['tests']['SR'];
        this.playerStats.data.batting.testms.bf = res['data']['batting']['tests']['BF'];
        this.playerStats.data.batting.testms.ave = res['data']['batting']['tests']['Ave'];
        this.playerStats.data.batting.testms.hs = res['data']['batting']['tests']['HS'];
        this.playerStats.data.batting.testms.runs = res['data']['batting']['tests']['Runs'];
        this.playerStats.data.batting.testms.no = res['data']['batting']['tests']['NO'];
        this.playerStats.data.batting.testms.inns = res['data']['batting']['tests']['Inns'];
        this.playerStats.data.batting.testms.mat = res['data']['batting']['tests']['Mat'];
      }

    }, error => {
      this.errorMessage = 'Internal Server Error While Fetching Data';
    });
  }

}
