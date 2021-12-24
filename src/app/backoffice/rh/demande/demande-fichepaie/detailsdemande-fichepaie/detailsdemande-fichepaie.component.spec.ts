import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdemandeFichepaieComponent } from './detailsdemande-fichepaie.component';

describe('DetailsdemandeFichepaieComponent', () => {
  let component: DetailsdemandeFichepaieComponent;
  let fixture: ComponentFixture<DetailsdemandeFichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsdemandeFichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdemandeFichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
