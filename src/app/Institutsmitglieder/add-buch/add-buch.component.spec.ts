import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuchComponent } from './add-buch.component';

describe('AddBuchComponent', () => {
  let component: AddBuchComponent;
  let fixture: ComponentFixture<AddBuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
