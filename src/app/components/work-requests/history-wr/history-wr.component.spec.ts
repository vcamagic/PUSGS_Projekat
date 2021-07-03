import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWrComponent } from './history-wr.component';

describe('HistoryWrComponent', () => {
  let component: HistoryWrComponent;
  let fixture: ComponentFixture<HistoryWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
