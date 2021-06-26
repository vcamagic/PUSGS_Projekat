import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkplanComponent } from './new-workplan.component';

describe('NewWorkplanComponent', () => {
  let component: NewWorkplanComponent;
  let fixture: ComponentFixture<NewWorkplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
