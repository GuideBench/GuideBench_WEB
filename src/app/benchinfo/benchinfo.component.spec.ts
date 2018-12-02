import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchinfoComponent } from './benchinfo.component';

describe('BenchinfoComponent', () => {
  let component: BenchinfoComponent;
  let fixture: ComponentFixture<BenchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
