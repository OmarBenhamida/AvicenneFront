import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGardeComponent } from './list-garde.component';

describe('ListGardeComponent', () => {
  let component: ListGardeComponent;
  let fixture: ComponentFixture<ListGardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
