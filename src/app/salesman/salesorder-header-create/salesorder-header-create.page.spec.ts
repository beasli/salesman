import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderHeaderCreatePage } from './salesorder-header-create.page';

describe('SalesorderHeaderCreatePage', () => {
  let component: SalesorderHeaderCreatePage;
  let fixture: ComponentFixture<SalesorderHeaderCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesorderHeaderCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderHeaderCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
