import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUsersPageComponent } from './invite-users-page.component';

describe('InviteUsersPageComponent', () => {
  let component: InviteUsersPageComponent;
  let fixture: ComponentFixture<InviteUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteUsersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
