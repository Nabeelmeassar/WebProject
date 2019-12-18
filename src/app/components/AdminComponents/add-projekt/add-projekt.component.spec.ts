import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjektComponent } from './add-projekt.component';

describe('AddProjektComponent', () => {
  let component: AddProjektComponent;
  let fixture: ComponentFixture<AddProjektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
