import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockLabelComponent } from './clock-label.component';

describe('ClockLabelComponent', () => {
  let component: ClockLabelComponent;
  let fixture: ComponentFixture<ClockLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
