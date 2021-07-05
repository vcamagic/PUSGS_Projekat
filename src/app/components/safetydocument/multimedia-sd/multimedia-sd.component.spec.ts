import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaSdComponent } from './multimedia-sd.component';

describe('MultimediaSdComponent', () => {
  let component: MultimediaSdComponent;
  let fixture: ComponentFixture<MultimediaSdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaSdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
