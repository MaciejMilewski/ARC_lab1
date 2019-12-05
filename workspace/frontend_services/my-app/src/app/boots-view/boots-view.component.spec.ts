import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsViewComponent } from './boots-view.component';

describe('BootsViewComponent', () => {
  let component: BootsViewComponent;
  let fixture: ComponentFixture<BootsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
