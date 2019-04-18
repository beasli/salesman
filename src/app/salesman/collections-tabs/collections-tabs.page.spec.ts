import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsTabsPage } from './collections-tabs.page';

describe('CollectionsTabsPage', () => {
  let component: CollectionsTabsPage;
  let fixture: ComponentFixture<CollectionsTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
