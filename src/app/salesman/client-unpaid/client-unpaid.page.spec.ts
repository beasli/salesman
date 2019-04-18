import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUnpaidPage } from './client-unpaid.page';

describe('ClientUnpaidPage', () => {
  let component: ClientUnpaidPage;
  let fixture: ComponentFixture<ClientUnpaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUnpaidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUnpaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
