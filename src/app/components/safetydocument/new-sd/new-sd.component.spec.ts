import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSdComponent } from './new-sd.component';

describe('NewSdComponent', () => {
  let component: NewSdComponent;
  let fixture: ComponentFixture<NewSdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
