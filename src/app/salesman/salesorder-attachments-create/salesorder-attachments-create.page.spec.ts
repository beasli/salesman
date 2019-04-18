import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderAttachmentsCreatePage } from './salesorder-attachments-create.page';

describe('SalesorderAttachmentsCreatePage', () => {
  let component: SalesorderAttachmentsCreatePage;
  let fixture: ComponentFixture<SalesorderAttachmentsCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesorderAttachmentsCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderAttachmentsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
