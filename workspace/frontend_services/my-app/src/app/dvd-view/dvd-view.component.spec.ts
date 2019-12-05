import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdViewComponent } from './dvd-view.component';

describe('DvdViewComponent', () => {
  let component: DvdViewComponent;
  let fixture: ComponentFixture<DvdViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
