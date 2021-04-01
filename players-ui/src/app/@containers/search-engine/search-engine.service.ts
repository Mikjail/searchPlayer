import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchEngineService {
  constructor(private http: HttpClient) {}

  getAvailablePlayer(playerId: string): Observable<any> {
    const api = `https://web-sandbox.onefootball.com/assignments/player/data/${playerId}.json`;
    return this.http.get(api).pipe(map((resp: any) => resp));
  }
}
