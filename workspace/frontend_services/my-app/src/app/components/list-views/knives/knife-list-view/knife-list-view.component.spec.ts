import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeListViewComponent } from './knife-list-view.component';

describe('KnifeListViewComponent', () => {
  let component: KnifeListViewComponent;
  let fixture: ComponentFixture<KnifeListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnifeListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnifeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
