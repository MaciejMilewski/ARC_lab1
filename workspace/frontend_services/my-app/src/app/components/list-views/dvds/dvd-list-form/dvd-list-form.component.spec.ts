import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdListFormComponent } from './dvd-list-form.component';

describe('DvdListFormComponent', () => {
  let component: DvdListFormComponent;
  let fixture: ComponentFixture<DvdListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
