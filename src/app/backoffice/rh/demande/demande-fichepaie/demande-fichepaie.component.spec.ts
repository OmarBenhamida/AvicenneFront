import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFichepaieComponent } from './demande-fichepaie.component';

describe('DemandeFichepaieComponent', () => {
  let component: DemandeFichepaieComponent;
  let fixture: ComponentFixture<DemandeFichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
