import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCashCreatePage } from './collections-cash-create.page';

describe('CollectionsCashCreatePage', () => {
  let component: CollectionsCashCreatePage;
  let fixture: ComponentFixture<CollectionsCashCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsCashCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsCashCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
