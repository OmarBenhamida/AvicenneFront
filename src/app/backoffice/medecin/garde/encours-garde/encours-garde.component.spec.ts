import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursGardeComponent } from './encours-garde.component';

describe('EncoursGardeComponent', () => {
  let component: EncoursGardeComponent;
  let fixture: ComponentFixture<EncoursGardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursGardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursGardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
