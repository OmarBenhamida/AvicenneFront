import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursAutorisationComponent } from './encours-autorisation.component';

describe('EncoursAutorisationComponent', () => {
  let component: EncoursAutorisationComponent;
  let fixture: ComponentFixture<EncoursAutorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursAutorisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
