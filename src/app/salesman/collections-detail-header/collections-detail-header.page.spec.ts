import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsDetailHeaderPage } from './collections-detail-header.page';

describe('CollectionsDetailHeaderPage', () => {
  let component: CollectionsDetailHeaderPage;
  let fixture: ComponentFixture<CollectionsDetailHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsDetailHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsDetailHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
