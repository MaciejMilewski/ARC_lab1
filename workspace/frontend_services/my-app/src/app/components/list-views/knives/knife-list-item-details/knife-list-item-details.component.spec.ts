import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeListItemDetailsComponent } from './knife-list-item-details.component';

describe('KnifeListItemDetailsComponent', () => {
  let component: KnifeListItemDetailsComponent;
  let fixture: ComponentFixture<KnifeListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnifeListItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnifeListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
