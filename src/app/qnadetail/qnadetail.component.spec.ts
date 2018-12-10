import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnadetailComponent } from './qnadetail.component';

describe('QnadetailComponent', () => {
  let component: QnadetailComponent;
  let fixture: ComponentFixture<QnadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
