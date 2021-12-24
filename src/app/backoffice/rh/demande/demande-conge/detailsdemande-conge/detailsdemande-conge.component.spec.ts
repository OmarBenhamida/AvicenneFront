import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdemandeCongeComponent } from './detailsdemande-conge.component';

describe('DetailsdemandeCongeComponent', () => {
  let component: DetailsdemandeCongeComponent;
  let fixture: ComponentFixture<DetailsdemandeCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsdemandeCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
