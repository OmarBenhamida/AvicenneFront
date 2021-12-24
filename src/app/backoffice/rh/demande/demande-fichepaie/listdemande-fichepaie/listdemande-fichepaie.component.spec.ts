import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemandeFichepaieComponent } from './listdemande-fichepaie.component';

describe('ListdemandeFichepaieComponent', () => {
  let component: ListdemandeFichepaieComponent;
  let fixture: ComponentFixture<ListdemandeFichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdemandeFichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdemandeFichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
