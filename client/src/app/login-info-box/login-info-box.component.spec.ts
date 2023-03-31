import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoBoxComponent } from './login-info-box.component';

describe('LoginInfoBoxComponent', () => {
  let component: LoginInfoBoxComponent;
  let fixture: ComponentFixture<LoginInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInfoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
