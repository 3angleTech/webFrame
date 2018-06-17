import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWebFeatureComponent } from './profile-web-feature.component';

describe('ProfileWebFeatureComponent', () => {
  let component: ProfileWebFeatureComponent;
  let fixture: ComponentFixture<ProfileWebFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWebFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWebFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
