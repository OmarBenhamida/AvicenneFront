import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursOperationComponent } from './encours-operation.component';

describe('EncoursOperationComponent', () => {
  let component: EncoursOperationComponent;
  let fixture: ComponentFixture<EncoursOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
