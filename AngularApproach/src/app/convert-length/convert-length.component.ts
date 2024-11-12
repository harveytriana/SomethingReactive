import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-convert-length',
  standalone: true,
  templateUrl: './convert-length.component.html',
  styleUrls: ['./convert-length.component.css']
})
export class ConvertLengthComponent {
  // Signal for inches and centimeters
  inches = signal(1);
  // Computed signal
  centimeters = computed(() => this.inches() * 2.54);

  constructor() {
    // Effect to update inches based on centimeters input change
    effect(() => {
      this.inches.update(inches => this.centimeters() / 2.54);
    });
  }

  // Method to update inches based on input field change
  onInchesChange(event: Event): void {
    let target = event.target as HTMLInputElement;
    this.inches.set(target.valueAsNumber);
  }

  // Method to update centimeters based on input field change
  onCentimetersChange(event: Event): void {
    let target = event.target as HTMLInputElement;
    this.inches.set(target.valueAsNumber / 2.54);
  }
}