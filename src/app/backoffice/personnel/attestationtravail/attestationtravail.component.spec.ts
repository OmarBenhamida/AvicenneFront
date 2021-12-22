import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationtravailComponent } from './attestationtravail.component';

describe('AttestationtravailComponent', () => {
  let component: AttestationtravailComponent;
  let fixture: ComponentFixture<AttestationtravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttestationtravailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationtravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
