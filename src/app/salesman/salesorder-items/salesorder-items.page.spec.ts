import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderItemsPage } from './salesorder-items.page';

describe('SalesorderItemsPage', () => {
  let component: SalesorderItemsPage;
  let fixture: ComponentFixture<SalesorderItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesorderItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
