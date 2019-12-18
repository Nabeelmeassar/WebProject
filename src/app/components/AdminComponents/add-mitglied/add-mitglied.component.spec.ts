import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMitgliedComponent } from './add-mitglied.component';

describe('AddMitgliedComponent', () => {
  let component: AddMitgliedComponent;
  let fixture: ComponentFixture<AddMitgliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMitgliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMitgliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
