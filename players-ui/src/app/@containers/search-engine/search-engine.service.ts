import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  PlayerBasicDetails,
  PlayerAdvancedDetails,
} from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class SearchEngineService {
  constructor(private http: HttpClient) {}

  getAvailablePlayer(playerId: string): Observable<PlayerBasicDetails> {
    const api = `https://web-sandbox.onefootball.com/assignments/player/data/${playerId}.json`;
    return this.http
      .get<PlayerBasicDetails>(api)
      .pipe(map((resp: PlayerBasicDetails) => resp));
  }

  getPlayerProfile(profileId: string): Observable<PlayerAdvancedDetails> {
    const api = `https://web-sandbox.onefootball.com/assignments/player/profile/${profileId}`;
    return this.http
      .get<PlayerAdvancedDetails>(api)
      .pipe(map((resp: PlayerAdvancedDetails) => resp));
  }
}
