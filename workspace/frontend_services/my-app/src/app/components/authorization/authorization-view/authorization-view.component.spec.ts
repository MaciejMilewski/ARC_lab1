import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationViewComponent } from './authorization-view.component';

describe('AuthorizationViewComponent', () => {
  let component: AuthorizationViewComponent;
  let fixture: ComponentFixture<AuthorizationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
