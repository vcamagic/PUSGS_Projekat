import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistSdComponent } from './checklist-sd.component';

describe('ChecklistSdComponent', () => {
  let component: ChecklistSdComponent;
  let fixture: ComponentFixture<ChecklistSdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistSdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
