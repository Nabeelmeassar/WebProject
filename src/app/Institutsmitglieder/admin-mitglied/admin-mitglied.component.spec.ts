import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMitgliedComponent } from './admin-mitglied.component';

describe('AdminMitgliedComponent', () => {
  let component: AdminMitgliedComponent;
  let fixture: ComponentFixture<AdminMitgliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMitgliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMitgliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
