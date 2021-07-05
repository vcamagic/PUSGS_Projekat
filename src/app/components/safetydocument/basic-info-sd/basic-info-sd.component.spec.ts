import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoSdComponent } from './basic-info-sd.component';

describe('BasicInfoSdComponent', () => {
  let component: BasicInfoSdComponent;
  let fixture: ComponentFixture<BasicInfoSdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoSdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
