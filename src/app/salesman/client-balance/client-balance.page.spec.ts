import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBalancePage } from './client-balance.page';

describe('ClientBalancePage', () => {
  let component: ClientBalancePage;
  let fixture: ComponentFixture<ClientBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBalancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
