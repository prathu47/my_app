import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsdealsComponent } from './giftsdeals.component';

describe('GiftsdealsComponent', () => {
  let component: GiftsdealsComponent;
  let fixture: ComponentFixture<GiftsdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
