import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSdComponent } from './equipment-sd.component';

describe('EquipmentSdComponent', () => {
  let component: EquipmentSdComponent;
  let fixture: ComponentFixture<EquipmentSdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentSdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
