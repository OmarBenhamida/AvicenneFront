import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursPaiementComponent } from './encours-paiement.component';

describe('EncoursPaiementComponent', () => {
  let component: EncoursPaiementComponent;
  let fixture: ComponentFixture<EncoursPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
