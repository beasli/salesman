import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCreatePage } from './collections-create.page';

describe('CollectionsCreatePage', () => {
  let component: CollectionsCreatePage;
  let fixture: ComponentFixture<CollectionsCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
