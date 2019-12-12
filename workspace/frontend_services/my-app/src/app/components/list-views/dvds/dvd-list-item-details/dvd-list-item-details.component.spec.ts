import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdListItemDetailsComponent } from './dvd-list-item-details.component';

describe('DvdListItemDetailsComponent', () => {
  let component: DvdListItemDetailsComponent;
  let fixture: ComponentFixture<DvdListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdListItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
