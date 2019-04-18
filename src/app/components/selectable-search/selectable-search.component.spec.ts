import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableSearchComponent } from './selectable-search.component';

describe('SelectableSearchComponent', () => {
  let component: SelectableSearchComponent;
  let fixture: ComponentFixture<SelectableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
