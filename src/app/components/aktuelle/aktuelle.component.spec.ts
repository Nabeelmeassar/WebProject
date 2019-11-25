import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuelleComponent } from './aktuelle.component';

describe('AktuelleComponent', () => {
  let component: AktuelleComponent;
  let fixture: ComponentFixture<AktuelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktuelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
