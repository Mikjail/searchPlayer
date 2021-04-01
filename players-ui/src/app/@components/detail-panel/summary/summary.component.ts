import { Component, Input, OnInit } from '@angular/core';

import { Stats } from './../../../models/player.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @Input() stats: Stats;

  constructor() {}

  ngOnInit(): void {}
}
