import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfStateChangesComponent } from './history-of-state-changes.component';

describe('HistoryOfStateChangesComponent', () => {
  let component: HistoryOfStateChangesComponent;
  let fixture: ComponentFixture<HistoryOfStateChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOfStateChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfStateChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
