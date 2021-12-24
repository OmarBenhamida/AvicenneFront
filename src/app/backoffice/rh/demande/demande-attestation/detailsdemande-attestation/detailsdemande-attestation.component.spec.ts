import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdemandeAttestationComponent } from './detailsdemande-attestation.component';

describe('DetailsdemandeAttestationComponent', () => {
  let component: DetailsdemandeAttestationComponent;
  let fixture: ComponentFixture<DetailsdemandeAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsdemandeAttestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdemandeAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
