import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaWrComponent } from './multimedia-wr.component';

describe('MultimediaWrComponent', () => {
  let component: MultimediaWrComponent;
  let fixture: ComponentFixture<MultimediaWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
