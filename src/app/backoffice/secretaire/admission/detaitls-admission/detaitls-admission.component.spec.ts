import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaitlsAdmissionComponent } from './detaitls-admission.component';

describe('DetaitlsAdmissionComponent', () => {
  let component: DetaitlsAdmissionComponent;
  let fixture: ComponentFixture<DetaitlsAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaitlsAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaitlsAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
