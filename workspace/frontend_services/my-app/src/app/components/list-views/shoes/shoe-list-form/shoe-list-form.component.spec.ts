import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeListFormComponent } from './shoe-list-form.component';

describe('ShoeListFormComponent', () => {
  let component: ShoeListFormComponent;
  let fixture: ComponentFixture<ShoeListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
