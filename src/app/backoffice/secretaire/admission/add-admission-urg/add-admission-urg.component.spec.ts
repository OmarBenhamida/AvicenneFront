import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmissionUrgComponent } from './add-admission-urg.component';

describe('AddAdmissionUrgComponent', () => {
  let component: AddAdmissionUrgComponent;
  let fixture: ComponentFixture<AddAdmissionUrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmissionUrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdmissionUrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
