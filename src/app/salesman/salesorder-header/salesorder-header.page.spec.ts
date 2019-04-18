import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderHeaderPage } from './salesorder-header.page';

describe('SalesorderHeaderPage', () => {
  let component: SalesorderHeaderPage;
  let fixture: ComponentFixture<SalesorderHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesorderHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
