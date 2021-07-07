import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyConsumerComponent } from './modify-consumer.component';

describe('ModifyConsumerComponent', () => {
  let component: ModifyConsumerComponent;
  let fixture: ComponentFixture<ModifyConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
