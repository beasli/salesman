import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderItemsCreatePage } from './salesorder-items-create.page';

describe('SalesorderItemsCreatePage', () => {
  let component: SalesorderItemsCreatePage;
  let fixture: ComponentFixture<SalesorderItemsCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesorderItemsCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderItemsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
