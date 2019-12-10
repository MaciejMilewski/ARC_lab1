import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeListItemDetailsComponent } from './shoe-list-item-details.component';

describe('ShoeListItemDetailsComponent', () => {
  let component: ShoeListItemDetailsComponent;
  let fixture: ComponentFixture<ShoeListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeListItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
