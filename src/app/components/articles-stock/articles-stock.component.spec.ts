import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesStockComponent } from './articles-stock.component';

describe('ArticlesStockComponent', () => {
  let component: ArticlesStockComponent;
  let fixture: ComponentFixture<ArticlesStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
