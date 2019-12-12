import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeListItemDetailsComponent } from './rope-list-item-details.component';

describe('RopeListItemDetailsComponent', () => {
  let component: RopeListItemDetailsComponent;
  let fixture: ComponentFixture<RopeListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RopeListItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RopeListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
