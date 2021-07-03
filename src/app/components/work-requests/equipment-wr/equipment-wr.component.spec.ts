import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentWrComponent } from './equipment-wr.component';

describe('EquipmentWrComponent', () => {
  let component: EquipmentWrComponent;
  let fixture: ComponentFixture<EquipmentWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
