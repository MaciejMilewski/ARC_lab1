import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeListFormComponent } from './knife-list-form.component';

describe('KnifeListFormComponent', () => {
  let component: KnifeListFormComponent;
  let fixture: ComponentFixture<KnifeListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnifeListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnifeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
