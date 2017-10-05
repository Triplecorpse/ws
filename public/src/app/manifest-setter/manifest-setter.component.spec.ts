import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestSetterComponent } from './manifest-setter.component';

describe('ManifestSetterComponent', () => {
  let component: ManifestSetterComponent;
  let fixture: ComponentFixture<ManifestSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
