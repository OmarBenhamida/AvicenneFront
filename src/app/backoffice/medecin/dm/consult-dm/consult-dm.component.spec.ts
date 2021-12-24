import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDmComponent } from './consult-dm.component';

describe('ConsultDmComponent', () => {
  let component: ConsultDmComponent;
  let fixture: ComponentFixture<ConsultDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultDmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
