import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursAnalyseComponent } from './encours-analyse.component';

describe('EncoursAnalyseComponent', () => {
  let component: EncoursAnalyseComponent;
  let fixture: ComponentFixture<EncoursAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
