import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichepaieComponent } from './fichepaie.component';

describe('FichepaieComponent', () => {
  let component: FichepaieComponent;
  let fixture: ComponentFixture<FichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
