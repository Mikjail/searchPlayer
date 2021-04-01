import { Component, Input, OnInit } from '@angular/core';

import { PlayerAdvancedDetails } from 'src/app/models/player.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() playerDetails: PlayerAdvancedDetails;

  constructor() {}

  ngOnInit(): void {}
}
