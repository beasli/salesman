import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailTabsPage } from './client-detail-tabs.page';

describe('ClientDetailTabsPage', () => {
  let component: ClientDetailTabsPage;
  let fixture: ComponentFixture<ClientDetailTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
