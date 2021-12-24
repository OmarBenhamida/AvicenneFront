import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddemandeFichepaieComponent } from './adddemande-fichepaie.component';

describe('AdddemandeFichepaieComponent', () => {
  let component: AdddemandeFichepaieComponent;
  let fixture: ComponentFixture<AdddemandeFichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddemandeFichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddemandeFichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
