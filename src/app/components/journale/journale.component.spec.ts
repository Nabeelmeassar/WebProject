import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournaleComponent } from './journale.component';

describe('JournaleComponent', () => {
  let component: JournaleComponent;
  let fixture: ComponentFixture<JournaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
