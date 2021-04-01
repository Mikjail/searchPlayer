import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import mockPlayerDetails from 'mocks/playerProfile';

import { DetailPanelComponent } from './../../@components/detail-panel/detail-panel.component';
import { SearchPanelComponent } from './../../@components/search-panel/search-panel.component';
import { SearchEngineComponent } from './search-engine.component';

import { SearchEngineService } from './search-engine.service';

describe('SearchEngineComponent', () => {
  let component: SearchEngineComponent;
  let fixture: ComponentFixture<SearchEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        SearchEngineComponent,
        SearchPanelComponent,
        DetailPanelComponent,
      ],
      providers: [
        { provide: SearchEngineService, useValue: mockPlayerDetails },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
