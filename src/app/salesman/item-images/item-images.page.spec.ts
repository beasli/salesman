import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemImagesPage } from './item-images.page';

describe('ItemImagesPage', () => {
  let component: ItemImagesPage;
  let fixture: ComponentFixture<ItemImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemImagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
