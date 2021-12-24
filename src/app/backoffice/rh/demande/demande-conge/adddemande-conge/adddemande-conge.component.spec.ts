import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddemandeCongeComponent } from './adddemande-conge.component';

describe('AdddemandeCongeComponent', () => {
  let component: AdddemandeCongeComponent;
  let fixture: ComponentFixture<AdddemandeCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddemandeCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
