import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeViewComponent } from './knife-view.component';

describe('KnifeViewComponent', () => {
  let component: KnifeViewComponent;
  let fixture: ComponentFixture<KnifeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnifeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnifeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
