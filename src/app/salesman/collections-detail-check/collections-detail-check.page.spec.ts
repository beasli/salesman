import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsDetailCheckPage } from './collections-detail-check.page';

describe('CollectionsDetailCheckPage', () => {
  let component: CollectionsDetailCheckPage;
  let fixture: ComponentFixture<CollectionsDetailCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsDetailCheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsDetailCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
