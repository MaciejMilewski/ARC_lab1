import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdListViewComponent } from './dvd-list-view.component';

describe('DvdListViewComponent', () => {
  let component: DvdListViewComponent;
  let fixture: ComponentFixture<DvdListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
