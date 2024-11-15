/*---------- Angular v18 ----------*/
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-convert-length',
  standalone: true,
  template: `
    <h3>Convert Inch to/from Centimeter - Two-Way Binding</h3>
    <label>Inches </label>
    <input id="inches" 
           type="number" [value]="inches()" 
           (input)="updateInches($event)" />
    <span> = </span>
    <input id="centimeters" 
           type="number" [value]="centimeters()" 
           (input)="updateCentimeters($event)" />
    <label> Centimeters</label>
  `
})
export class ConvertLengthComponent {
  inches = signal(1);
  centimeters = computed(() => this.inches() * 2.54);

  //----- Two-Way Binding ~Approach -----
  updateInches(event: Event): void {
    let target = event.target as HTMLInputElement;
    this.inches.set(target.valueAsNumber);
  }

  updateCentimeters(event: Event): void {
    let target = event.target as HTMLInputElement;
    this.inches.set(target.valueAsNumber / 2.54);
  }
}
