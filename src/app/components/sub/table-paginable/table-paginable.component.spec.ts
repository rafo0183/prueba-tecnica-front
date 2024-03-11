import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginableComponent } from './table-paginable.component';

describe('TablePaginableComponent', () => {
  let component: TablePaginableComponent;
  let fixture: ComponentFixture<TablePaginableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaginableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaginableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
