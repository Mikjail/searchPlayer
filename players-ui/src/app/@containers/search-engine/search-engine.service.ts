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
    const api = `/api/player?playerId=${playerId}`;
    return this.http
      .get<PlayerBasicDetails>(api)
      .pipe(map((resp: PlayerBasicDetails) => resp));
  }

  getPlayerProfile(profileId: string): Observable<PlayerAdvancedDetails> {
    const api = `/api/profile?profileId=${profileId}`;
    return this.http
      .get<PlayerAdvancedDetails>(api)
      .pipe(map((resp: PlayerAdvancedDetails) => resp));
  }
}
