/*---------- Angular v18 ----------*/
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-convert-length',
  standalone: true,
  template: `
    <h3>Convert Inch to/from Centimeter - Two-Way Binding</h3>
    <label>Inches </label>
    <input type="number"
          [value]="inches()"
          (input)="onInchesChange($event)"
    />
    <span> = </span>
    <input type="number"
          [value]="centimeters()"
          (input)="onCentimetersChange($event)"
    />
    <label> Centimeters</label>
  `
})
export class ConvertLengthComponent {
  inches = signal(1);
  centimeters = computed(() => this.inches() * 2.54);

  constructor() {
    effect(() => {
      this.inches.update(()=> this.centimeters() / 2.54);
    });
  }

  //----- Two-Way Binding ~Approach -----
  onInchesChange(event: Event): void {
    let target = event.target as HTMLInputElement;
    this.inches.set(target.valueAsNumber);
  }

  onCentimetersChange(event: Event): void {
    let target = event.target as HTMLInputElement;
    this.inches.set(target.valueAsNumber / 2.54);
  }
}
