import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursEchantillonComponent } from './encours-echantillon.component';

describe('EncoursEchantillonComponent', () => {
  let component: EncoursEchantillonComponent;
  let fixture: ComponentFixture<EncoursEchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursEchantillonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursEchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
