import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursArticleComponent } from './encours-article.component';

describe('EncoursArticleComponent', () => {
  let component: EncoursArticleComponent;
  let fixture: ComponentFixture<EncoursArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoursArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
