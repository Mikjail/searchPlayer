import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchPanelComponent } from './search-panel.component';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;
  const mockPlayedId = 'fabio';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPanelComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    component.query = mockPlayedId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the search input by the query value', () => {
    expect(component.query).toEqual(component.form.value.query);
  });

  it('should emit the new value when user clicks on search', () => {
    const newQuery = 'rincon';
    const searchSpy = spyOn(component.searchPlayer, 'emit');
    // set query
    component.form.patchValue({ query: newQuery });
    // click on btn
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    // searchQuery emitted
    expect(searchSpy).toHaveBeenCalledWith(newQuery);
  });

  it('should send the query as lowerCase', () => {
    const newQuery = 'RincoN';
    const searchSpy = spyOn(component.searchPlayer, 'emit');
    // set query
    component.form.patchValue({ query: newQuery });
    // click on btn
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    // searchQuery emitted
    expect(searchSpy).toHaveBeenCalledWith(newQuery.toLowerCase());
  });
});
