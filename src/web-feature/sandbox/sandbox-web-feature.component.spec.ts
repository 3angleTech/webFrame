import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxWebFeatureComponent } from './sandbox-web-feature.component';

describe('SandboxWebFeatureComponent', () => {
  let component: SandboxWebFeatureComponent;
  let fixture: ComponentFixture<SandboxWebFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxWebFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxWebFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
