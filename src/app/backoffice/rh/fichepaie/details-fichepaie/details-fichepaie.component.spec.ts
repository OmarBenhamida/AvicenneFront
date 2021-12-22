import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFichepaieComponent } from './details-fichepaie.component';

describe('DetailsFichepaieComponent', () => {
  let component: DetailsFichepaieComponent;
  let fixture: ComponentFixture<DetailsFichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
