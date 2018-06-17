import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWebFrameLayoutComponent } from './basic-web-frame-layout.component';

describe('BasicWebFrameLayoutComponent', () => {
  let component: BasicWebFrameLayoutComponent;
  let fixture: ComponentFixture<BasicWebFrameLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWebFrameLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWebFrameLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
