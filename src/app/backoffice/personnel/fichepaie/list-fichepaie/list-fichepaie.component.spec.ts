import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichepaieComponent } from './list-fichepaie.component';

describe('ListFichepaieComponent', () => {
  let component: ListFichepaieComponent;
  let fixture: ComponentFixture<ListFichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
