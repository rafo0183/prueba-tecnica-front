import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMadeComponent } from './transfer-made.component';

describe('TransferMadeComponent', () => {
  let component: TransferMadeComponent;
  let fixture: ComponentFixture<TransferMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferMadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
