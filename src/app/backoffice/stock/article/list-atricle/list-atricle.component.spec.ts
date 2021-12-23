import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtricleComponent } from './list-atricle.component';

describe('ListAtricleComponent', () => {
  let component: ListAtricleComponent;
  let fixture: ComponentFixture<ListAtricleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAtricleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAtricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
