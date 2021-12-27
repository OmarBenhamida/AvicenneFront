import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreComponent } from './erre.component';

describe('ErreComponent', () => {
  let component: ErreComponent;
  let fixture: ComponentFixture<ErreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
