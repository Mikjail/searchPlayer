import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import mockPlayerDetails from 'mocks/playerProfile';
import mockBasicPlayerDetails from 'mocks/playerData';

import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DetailPanelComponent } from './../../@components/detail-panel/detail-panel.component';
import { SearchPanelComponent } from './../../@components/search-panel/search-panel.component';
import { SearchEngineComponent } from './search-engine.component';

import { SearchEngineService } from './search-engine.service';

describe('SearchEngineComponent', () => {
  let component: SearchEngineComponent;
  let fixture: ComponentFixture<SearchEngineComponent>;
  let searchService: SearchEngineService;
  const PLAYER_NOT_AVAILABLE = 'Player is not available';
  const INITIAL_SEARCH = 'Start your search!';
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        SearchEngineComponent,
        SearchPanelComponent,
        DetailPanelComponent,
      ],
      providers: [SearchEngineService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEngineComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchEngineService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get profile details if player is active', fakeAsync(() => {
    mockBasicPlayerDetails.active = 'true';
    spyOn(searchService, 'getAvailablePlayer').and.returnValue(
      of(mockBasicPlayerDetails).pipe(delay(1)),
    );
    spyOn(searchService, 'getPlayerProfile').and.returnValue(
      of(mockPlayerDetails).pipe(delay(1)),
    );
    // Initial component state
    expect(component.initialState).toBeTruthy();
    expect(component.noContent).toBeFalsy();
    expect(component.loader).toBeFalsy();
    expect(component.playerDetails).toBeUndefined();
    // Search is emitted
    component.onSearchPlayer('fabio');
    expect(component.loader).toBeTruthy();
    // simulate the 1sec delay to reponse
    tick(1);
    // service should have been called
    expect(searchService.getAvailablePlayer).toHaveBeenCalled();
    // simulate the 1sec delay to reponse
    tick(1);
    // service should have been called
    expect(searchService.getPlayerProfile).toHaveBeenCalled();
    // state of load, and noContent and playerDetails changed
    expect(component.initialState).toBeFalsy();
    expect(component.loader).toBeFalsy();
    expect(component.noContent).toBeFalsy();
    expect(component.playerDetails).toEqual(mockPlayerDetails);
  }));

  it('should not get profile details if player is not active', fakeAsync(() => {
    mockBasicPlayerDetails.active = 'false';
    spyOn(searchService, 'getAvailablePlayer').and.returnValue(
      of(mockBasicPlayerDetails).pipe(delay(1)),
    );
    spyOn(searchService, 'getPlayerProfile').and.returnValue(
      of(mockPlayerDetails).pipe(delay(1)),
    );
    // Initial component state
    expect(component.initialState).toBeTruthy();
    expect(component.noContent).toBeFalsy();
    expect(component.loader).toBeFalsy();
    expect(component.playerDetails).toBeUndefined();
    // Search is emitted
    component.onSearchPlayer('fabio');
    // simulate the 1sec delay to reponse
    tick(1);
    // service should have been called
    expect(searchService.getAvailablePlayer).toHaveBeenCalled();
    expect(component.loader).toBeFalse();
    expect(component.noContent).toBeTruthy();
    expect(component.playerDetails).toBeUndefined();
    // service should not have been called
    expect(searchService.getPlayerProfile).toHaveBeenCalledTimes(0);
  }));

  it('should show `player is not available` if player is not active', fakeAsync(() => {
    mockBasicPlayerDetails.active = 'false';
    spyOn(searchService, 'getAvailablePlayer').and.returnValue(
      of(mockBasicPlayerDetails).pipe(delay(1)),
    );
    // Search is emitted
    component.onSearchPlayer('fabio');
    // simulate the 1sec delay to reponse
    tick(1);
    // Template detect changes
    fixture.detectChanges();
    // Get no-content element
    const element = fixture.debugElement.nativeElement.querySelector(
      '.search-engine__no-content',
    );
    expect(element.innerText).toEqual(PLAYER_NOT_AVAILABLE);
  }));

  it('should show `player is not available` if player doesnt exist', fakeAsync(() => {
    spyOn(searchService, 'getAvailablePlayer').and.returnValue(
      throwError({ status: 404 }),
    );
    // Search is emitted
    component.onSearchPlayer('fabio');
    // simulate the 1sec delay to reponse
    tick(1);
    // Template detect changes
    fixture.detectChanges();
    // Get no-content element
    const element = fixture.debugElement.nativeElement.querySelector(
      '.search-engine__no-content',
    );
    expect(element.innerText).toEqual(PLAYER_NOT_AVAILABLE);
  }));

  it('should show initial message state if search is empty', fakeAsync(() => {
    // Search is emitted
    component.onSearchPlayer('');
    // Template detect changes
    fixture.detectChanges();
    // Get no-content element
    const element = fixture.debugElement.nativeElement.querySelector(
      '.search-engine__no-content',
    );
    expect(element.innerText).toEqual(INITIAL_SEARCH);
  }));

  it('should show `player is not available` if profile info doesnt exist', fakeAsync(() => {
    mockBasicPlayerDetails.active = 'true';
    spyOn(searchService, 'getAvailablePlayer').and.returnValue(
      of(mockBasicPlayerDetails).pipe(delay(1)),
    );
    spyOn(searchService, 'getPlayerProfile').and.returnValue(
      throwError({ status: 404 }),
    );
    // Initial component state
    expect(component.initialState).toBeTruthy();
    expect(component.noContent).toBeFalsy();
    expect(component.loader).toBeFalsy();
    expect(component.playerDetails).toBeUndefined();
    // Search is emitted
    component.onSearchPlayer('fabio');
    expect(component.loader).toBeTruthy();
    // simulate the 1sec delay to reponse
    tick(1);
    // service should have been called
    expect(searchService.getAvailablePlayer).toHaveBeenCalled();
    // simulate the 1sec delay to reponse
    tick(1);
    // service should have been called
    expect(searchService.getPlayerProfile).toHaveBeenCalled();
    // state of load, and noContent and playerDetails changed
    expect(component.initialState).toBeFalsy();
    expect(component.loader).toBeFalsy();
    expect(component.noContent).toBeTruthy();
    // Trigger changes in template
    fixture.detectChanges();
    // Get no-content element
    const element = fixture.debugElement.nativeElement.querySelector(
      '.search-engine__no-content',
    );
    expect(element.innerText).toEqual(PLAYER_NOT_AVAILABLE);
  }));
});
