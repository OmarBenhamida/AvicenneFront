import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemandeCongeComponent } from './listdemande-conge.component';

describe('ListdemandeCongeComponent', () => {
  let component: ListdemandeCongeComponent;
  let fixture: ComponentFixture<ListdemandeCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdemandeCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
