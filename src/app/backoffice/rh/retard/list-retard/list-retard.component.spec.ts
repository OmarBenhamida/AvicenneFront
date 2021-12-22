import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRetardComponent } from './list-retard.component';

describe('ListRetardComponent', () => {
  let component: ListRetardComponent;
  let fixture: ComponentFixture<ListRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRetardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
