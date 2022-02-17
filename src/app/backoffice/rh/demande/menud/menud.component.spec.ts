import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudComponent } from './menud.component';

describe('MenudComponent', () => {
  let component: MenudComponent;
  let fixture: ComponentFixture<MenudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
