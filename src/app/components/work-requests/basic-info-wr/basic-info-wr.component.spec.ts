import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoWrComponent } from './basic-info-wr.component';

describe('BasicInfoWrComponent', () => {
  let component: BasicInfoWrComponent;
  let fixture: ComponentFixture<BasicInfoWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
