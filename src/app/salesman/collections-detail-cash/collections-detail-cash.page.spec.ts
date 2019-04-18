import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsDetailCashPage } from './collections-detail-cash.page';

describe('CollectionsDetailCashPage', () => {
  let component: CollectionsDetailCashPage;
  let fixture: ComponentFixture<CollectionsDetailCashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsDetailCashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsDetailCashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
