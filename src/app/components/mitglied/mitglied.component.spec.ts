import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitgliedComponent } from './mitglied.component';

describe('MitgliedComponent', () => {
  let component: MitgliedComponent;
  let fixture: ComponentFixture<MitgliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitgliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitgliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
