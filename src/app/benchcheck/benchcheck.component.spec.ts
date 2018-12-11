import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchcheckComponent } from './benchcheck.component';

describe('BenchcheckComponent', () => {
  let component: BenchcheckComponent;
  let fixture: ComponentFixture<BenchcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
