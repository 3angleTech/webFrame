import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotActivatedPageComponent } from './account-not-activated-page.component';

describe('AccountNotActivatedPageComponent', () => {
  let component: AccountNotActivatedPageComponent;
  let fixture: ComponentFixture<AccountNotActivatedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNotActivatedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNotActivatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
