import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetydocumentComponent } from './safetydocument.component';

describe('SafetydocumentComponent', () => {
  let component: SafetydocumentComponent;
  let fixture: ComponentFixture<SafetydocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetydocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetydocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
