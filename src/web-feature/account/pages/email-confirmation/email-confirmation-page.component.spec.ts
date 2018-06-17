import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmationPageComponent } from './email-confirmation-page.component';

describe('EmailConfirmationPageComponent', () => {
  let component: EmailConfirmationPageComponent;
  let fixture: ComponentFixture<EmailConfirmationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfirmationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
