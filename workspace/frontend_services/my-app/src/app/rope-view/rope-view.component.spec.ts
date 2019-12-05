import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeViewComponent } from './rope-view.component';

describe('RopeViewComponent', () => {
  let component: RopeViewComponent;
  let fixture: ComponentFixture<RopeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RopeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RopeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
