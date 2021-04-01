import { Component, Input, OnInit } from '@angular/core';

import { PlayerAdvancedDetails } from './../../models/player.model';

import mockPlayerDetail from 'mocks/playerProfile';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.scss'],
})
export class DetailPanelComponent implements OnInit {
  @Input() playerDetails: PlayerAdvancedDetails;

  constructor() {}

  ngOnInit(): void {}
}
