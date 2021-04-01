import { ComponentFixture, TestBed } from '@angular/core/testing';

import mockPlayerDetails from 'mocks/playerProfile';

import { StatsComponent } from './stats.component';

import { StatType } from 'src/app/models/stats.model';

import { TitleToSentencePipe } from './../../../utils/pipes/title-to-sentence.pipe';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsComponent, TitleToSentencePipe],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    component.stats = Object.assign({}, mockPlayerDetails.stats);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set successfulCrosses as -> successfulCrosses/totalCrosses', () => {
    expect(component).toBeTruthy();
    const expectedValue = `${mockPlayerDetails.stats.successfulCrosses}/${mockPlayerDetails.stats.totalCrosses}`;
    expect(component.stats.successfulCrosses).toEqual(expectedValue);
  });

  it('should set tacklesWon based as -> tacklesWon/totalTackles', () => {
    const expectedValue = `${mockPlayerDetails.stats.tacklesWon}/${mockPlayerDetails.stats.totalTackles}`;
    expect(component.stats.tacklesWon).toEqual(expectedValue);
  });

  it('should render the stats based on the stateType selected', () => {
    const mockEventArg = { preventDefault: () => {} } as Event;
    // Selecting Defensive stats
    component.onSelectStat(mockEventArg, StatType.DEFFENSIVE);
    fixture.detectChanges();
    const elements = fixture.debugElement.nativeElement.querySelectorAll(
      '.stats__item__table__row__value',
    );
    const selectedKeyMap = component.statMap[StatType.DEFFENSIVE];
    selectedKeyMap.forEach((key, index) => {
      expect(component.stats[key]).toEqual(elements[index].innerText);
    });
  });

  it('should set statSelected based on onSelectStat method', () => {
    const mockEventArg = { preventDefault: () => {} } as Event;
    // Selecting Offensive stats
    component.onSelectStat(mockEventArg, StatType.OFFENSIVE);
    fixture.detectChanges();
    expect(component.statSelected).toEqual(StatType.OFFENSIVE);
  });
});
