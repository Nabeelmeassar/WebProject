import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLehrveranstaltungComponent } from './add-lehrveranstaltung.component';

describe('AddLehrveranstaltungComponent', () => {
  let component: AddLehrveranstaltungComponent;
  let fixture: ComponentFixture<AddLehrveranstaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLehrveranstaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLehrveranstaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
