import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWebFeatureComponent } from './account-web-feature.component';

describe('AccountWebFeatureComponent', () => {
  let component: AccountWebFeatureComponent;
  let fixture: ComponentFixture<AccountWebFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWebFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWebFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
