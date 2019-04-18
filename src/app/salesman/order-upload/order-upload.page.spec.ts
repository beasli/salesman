import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUploadPage } from './order-upload.page';

describe('OrderUploadPage', () => {
  let component: OrderUploadPage;
  let fixture: ComponentFixture<OrderUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
