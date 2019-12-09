import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeListFormComponent } from './rope-list-form.component';

describe('RopeListFormComponent', () => {
  let component: RopeListFormComponent;
  let fixture: ComponentFixture<RopeListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RopeListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RopeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
