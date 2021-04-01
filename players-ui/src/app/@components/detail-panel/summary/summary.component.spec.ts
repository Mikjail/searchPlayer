import { ComponentFixture, TestBed } from '@angular/core/testing';

import mockPlayerDetails from 'mocks/playerProfile';

import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    component.stats = mockPlayerDetails.stats;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the summary Games, Assists and Goals', () => {
    const elements = fixture.debugElement.nativeElement.querySelectorAll(
      '.summary__item__value',
    );
    // Show Games
    expect(elements[0].innerText).toEqual(component.stats.gamesPlayed);
    // Show Assists
    expect(elements[1].innerText).toEqual(component.stats.assists);
    // Show Goals
    expect(elements[2].innerText).toEqual(component.stats.goals);
  });
});
