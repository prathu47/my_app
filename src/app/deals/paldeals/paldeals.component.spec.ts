import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaldealsComponent } from './paldeals.component';

describe('PaldealsComponent', () => {
  let component: PaldealsComponent;
  let fixture: ComponentFixture<PaldealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaldealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaldealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
