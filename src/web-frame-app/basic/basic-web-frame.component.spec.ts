import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWebFrameComponent } from './basic-web-frame.component';

describe('BasicWebFrameComponent', () => {
  let component: BasicWebFrameComponent;
  let fixture: ComponentFixture<BasicWebFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWebFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWebFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
