import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonferenzbeitraegenComponent } from './konferenzbeitraegen.component';

describe('KonferenzbeitraegenComponent', () => {
  let component: KonferenzbeitraegenComponent;
  let fixture: ComponentFixture<KonferenzbeitraegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonferenzbeitraegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonferenzbeitraegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
