import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchdetailComponent } from './benchdetail.component';

describe('BenchdetailComponent', () => {
  let component: BenchdetailComponent;
  let fixture: ComponentFixture<BenchdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
