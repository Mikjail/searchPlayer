import { StatType } from './../../../models/stats.model';
import { Component, Input, OnInit } from '@angular/core';

import { Stats } from './../../../models/player.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() stats: Stats;

  statMap: { [key: string]: (keyof Stats)[] } = {
    [StatType.OFFENSIVE]: [
      'goals',
      'assists',
      'totalShots',
      'foulsConceded',
      'shotsOnTarget',
    ],
    [StatType.DEFFENSIVE]: [
      'clearances',
      'tacklesWon',
      'aerialDuelsWon',
      'duelsWon',
      'blocks',
      'interceptions',
    ],
    [StatType.PASSING]: ['successfulCrosses', 'passingAccuracy', 'totalPasses'],
  };
  statTypes = Object.keys(this.statMap) as StatType[];
  statSelected?: StatType;
  iterateKeys = Object.keys;

  constructor() {}

  ngOnInit(): void {
    this.setGroupValues();
  }

  /**
   * This will set:
   *  @successfulCrosses based on the @totalCrosses
   *  @tacklesWon based on the @totalTackles
   */
  setGroupValues(): void {
    this.stats.successfulCrosses = `${this.stats.successfulCrosses}/${this.stats.totalCrosses}`;
    this.stats.tacklesWon = `${this.stats.tacklesWon}/${this.stats.totalTackles}`;
  }

  /**
   * This will show the table based on the @statView clicked
   * @param event - Event coming from event handler.
   * @param statView - type of stat to be shown
   */
  onSelectStat(event: Event, statView: StatType): void {
    event.preventDefault();
    if (statView !== this.statSelected) {
      this.statSelected = statView;
    } else {
      this.statSelected = undefined;
    }
  }
}
