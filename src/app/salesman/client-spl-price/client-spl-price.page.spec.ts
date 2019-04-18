import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSplPricePage } from './client-spl-price.page';

describe('ClientSplPricePage', () => {
  let component: ClientSplPricePage;
  let fixture: ComponentFixture<ClientSplPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSplPricePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSplPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
