import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializingPage } from './initializing.page';

describe('InitializingPage', () => {
  let component: InitializingPage;
  let fixture: ComponentFixture<InitializingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitializingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
