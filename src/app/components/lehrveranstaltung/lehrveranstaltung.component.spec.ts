import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrveranstaltungComponent } from './lehrveranstaltung.component';

describe('LehrveranstaltungComponent', () => {
  let component: LehrveranstaltungComponent;
  let fixture: ComponentFixture<LehrveranstaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LehrveranstaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LehrveranstaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
