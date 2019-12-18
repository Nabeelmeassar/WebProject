import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKonferenzbeitraegeComponent } from './add-konferenzbeitraege.component';

describe('AddKonferenzbeitraegeComponent', () => {
  let component: AddKonferenzbeitraegeComponent;
  let fixture: ComponentFixture<AddKonferenzbeitraegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKonferenzbeitraegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKonferenzbeitraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
