import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursPrescriptionComponent } from './encours-prescription.component';

describe('EncoursPrescriptionComponent', () => {
  let component: EncoursPrescriptionComponent;
  let fixture: ComponentFixture<EncoursPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
