import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFichepaieComponent } from './add-fichepaie.component';

describe('AddFichepaieComponent', () => {
  let component: AddFichepaieComponent;
  let fixture: ComponentFixture<AddFichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
