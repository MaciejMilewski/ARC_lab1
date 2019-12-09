import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeListViewComponent } from './rope-list-view.component';

describe('RopeListViewComponent', () => {
  let component: RopeListViewComponent;
  let fixture: ComponentFixture<RopeListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RopeListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RopeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
