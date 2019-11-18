import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuecherComponent } from './buecher.component';

describe('BuecherComponent', () => {
  let component: BuecherComponent;
  let fixture: ComponentFixture<BuecherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuecherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
