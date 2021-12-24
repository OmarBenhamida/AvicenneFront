import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDmComponent } from './list-dm.component';

describe('ListDmComponent', () => {
  let component: ListDmComponent;
  let fixture: ComponentFixture<ListDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
