import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewarivalsComponent } from './newarivals.component';

describe('NewarivalsComponent', () => {
  let component: NewarivalsComponent;
  let fixture: ComponentFixture<NewarivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewarivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewarivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
