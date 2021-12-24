import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemandeAttestationComponent } from './listdemande-attestation.component';

describe('ListdemandeAttestationComponent', () => {
  let component: ListdemandeAttestationComponent;
  let fixture: ComponentFixture<ListdemandeAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdemandeAttestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdemandeAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
