import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddemandeAttestationComponent } from './adddemande-attestation.component';

describe('AdddemandeAttestationComponent', () => {
  let component: AdddemandeAttestationComponent;
  let fixture: ComponentFixture<AdddemandeAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddemandeAttestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddemandeAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
