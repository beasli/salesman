import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderListPage } from './sales-order-list.page';

describe('SalesOrderListPage', () => {
  let component: SalesOrderListPage;
  let fixture: ComponentFixture<SalesOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
