import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeListViewComponent } from './shoe-list-view.component';

describe('ShoeListViewComponent', () => {
  let component: ShoeListViewComponent;
  let fixture: ComponentFixture<ShoeListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
