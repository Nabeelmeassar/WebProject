import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJournaleComponent } from './add-journale.component';

describe('AddJournaleComponent', () => {
  let component: AddJournaleComponent;
  let fixture: ComponentFixture<AddJournaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJournaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJournaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
