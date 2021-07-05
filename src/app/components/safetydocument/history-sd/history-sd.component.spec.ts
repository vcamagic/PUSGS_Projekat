import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySdComponent } from './history-sd.component';

describe('HistorySdComponent', () => {
  let component: HistorySdComponent;
  let fixture: ComponentFixture<HistorySdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
