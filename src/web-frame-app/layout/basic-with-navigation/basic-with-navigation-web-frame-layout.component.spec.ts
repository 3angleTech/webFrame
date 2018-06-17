import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWithNavigationWebFrameLayoutComponent } from './basic-with-navigation-web-frame-layout.component';

describe('BasicWithNavigationWebFrameLayoutComponent', () => {
  let component: BasicWithNavigationWebFrameLayoutComponent;
  let fixture: ComponentFixture<BasicWithNavigationWebFrameLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWithNavigationWebFrameLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWithNavigationWebFrameLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
