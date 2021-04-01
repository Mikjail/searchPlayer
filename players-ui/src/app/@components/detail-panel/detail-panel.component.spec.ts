import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary/summary.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailPanelComponent } from './detail-panel.component';

import mockPlayerDetails from 'mocks/playerProfile';

describe('DetailPanelComponent', () => {
  let component: DetailPanelComponent;
  let fixture: ComponentFixture<DetailPanelComponent>;
  const playerDetails = mockPlayerDetails;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DetailPanelComponent,
        ProfileComponent,
        SummaryComponent,
        StatsComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPanelComponent);
    component = fixture.componentInstance;
    component.playerDetails = playerDetails;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
