import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

import mockPlayerDetail from 'mocks/playerProfile';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.playerDetails = Object.assign({}, mockPlayerDetail);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the player profile details', () => {
    expect(component).toBeTruthy();
    const elements = fixture.debugElement.nativeElement.querySelectorAll(
      '.profile__item__value',
    );
    // show id
    expect(component.playerDetails.id).toEqual(elements[0].innerText);
    // Show team
    expect(component.playerDetails.profile.team).toEqual(elements[1].innerText);
    // Show age
    expect(component.playerDetails.profile.age).toEqual(elements[2].innerText);
    // Show position
    expect(component.playerDetails.profile.role).toEqual(elements[3].innerText);
  });
});
