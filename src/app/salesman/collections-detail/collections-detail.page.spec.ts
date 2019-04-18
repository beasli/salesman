import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsDetailPage } from './collections-detail.page';

describe('CollectionsDetailPage', () => {
  let component: CollectionsDetailPage;
  let fixture: ComponentFixture<CollectionsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
