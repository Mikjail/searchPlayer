import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {
  PlayerAdvancedDetails,
  PlayerBasicDetails,
} from 'src/app/models/player.model';

import { SearchEngineService } from './search-engine.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss'],
})
export class SearchEngineComponent implements OnInit {
  playerDetails?: PlayerAdvancedDetails;
  loader = false;
  noContent = false;
  initialState = true;

  constructor(private searchEngineService: SearchEngineService) {}

  ngOnInit(): void {}

  /**
   * Will get basic player details, if player is @active, then will
   * try to get the profile details to show the panel result
   * @param playerId - player id to get @profileId and to know if
   * player is @active
   */
  onSearchPlayer(playerId: string) {
    this.playerDetails = undefined;
    if (playerId === '') {
      this.initialState = true;
      this.noContent = false;
      return;
    }
    this.initialState = false;
    this.loader = true;
    this.searchEngineService.getAvailablePlayer(playerId).subscribe(
      (data: PlayerBasicDetails) => {
        if (data.active === 'true' || data.active === true) {
          this.getPlayerAdvacedDetails(data['profile-id']);
        } else {
          this.loader = false;
          this.noContent = true;
        }
      },
      (error: HttpErrorResponse) => {
        this.loader = false;
        this.noContent = true;
      },
    );
  }

  /**
   * Will get advanced details and will set @playerDetails
   * @param profileId - profile id to get @profile and @stat details
   */
  getPlayerAdvacedDetails(profileId: string): void {
    this.searchEngineService.getPlayerProfile(profileId).subscribe(
      (data: PlayerAdvancedDetails) => {
        this.playerDetails = data;
        this.loader = false;
      },
      (error: HttpErrorResponse) => {
        this.loader = false;
        this.noContent = true;
      },
    );
  }
}
