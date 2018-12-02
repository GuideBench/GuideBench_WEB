import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcheckComponent } from './eventcheck.component';

describe('EventcheckComponent', () => {
  let component: EventcheckComponent;
  let fixture: ComponentFixture<EventcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
