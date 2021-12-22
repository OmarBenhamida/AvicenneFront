import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRetardComponent } from './details-retard.component';

describe('DetailsRetardComponent', () => {
  let component: DetailsRetardComponent;
  let fixture: ComponentFixture<DetailsRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRetardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
