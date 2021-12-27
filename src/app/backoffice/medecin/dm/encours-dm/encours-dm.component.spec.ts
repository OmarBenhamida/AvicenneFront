import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursDmComponent } from './encours-dm.component';

describe('EncoursDmComponent', () => {
  let component: EncoursDmComponent;
  let fixture: ComponentFixture<EncoursDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursDmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
