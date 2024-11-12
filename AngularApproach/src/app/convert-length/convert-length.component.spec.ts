import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertLengthComponent } from './convert-length.component';

describe('ConvertLengthComponent', () => {
  let component: ConvertLengthComponent;
  let fixture: ComponentFixture<ConvertLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertLengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
