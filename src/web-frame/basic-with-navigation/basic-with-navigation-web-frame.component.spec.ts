import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWithNavigationWebFrameComponent } from './basic-with-navigation-web-frame.component';

describe('BasicWithNavigationWebFrameComponent', () => {
  let component: BasicWithNavigationWebFrameComponent;
  let fixture: ComponentFixture<BasicWithNavigationWebFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWithNavigationWebFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWithNavigationWebFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
