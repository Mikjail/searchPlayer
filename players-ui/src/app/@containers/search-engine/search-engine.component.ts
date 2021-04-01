import { Component, OnInit } from '@angular/core';

import mockPlayerDetails from 'mocks/playerProfile';

import { PlayerAdvancedDetails } from 'src/app/models/player.model';

import { SearchEngineService } from './search-engine.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss'],
})
export class SearchEngineComponent implements OnInit {
  playerDetails: PlayerAdvancedDetails;
  loader: boolean;

  constructor(private searchEngineService: SearchEngineService) {}

  ngOnInit(): void {
    this.playerDetails = mockPlayerDetails;
  }

  onSearchPlayer(playerId: string) {
    this.loader = true;
    this.searchEngineService.getAvailablePlayer(playerId).subscribe(
      (data: any) => {
        console.log(data);
        this.loader = false;
      },
      (error) => {
        console.log(error);
        this.loader = false;
      },
    );
  }
}
