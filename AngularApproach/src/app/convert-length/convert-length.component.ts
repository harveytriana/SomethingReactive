import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-convert-length',
  standalone: true,
  templateUrl: './convert-length.component.html',
  styleUrls: ['./convert-length.component.css']
})
export class ConvertLengthComponent {
  // define Signals
  inches = signal(1);
  centimeters = signal(2.54);

  updateCentimeters() {
    this.centimeters.set(this.inches() * 2.54);
  }

  updateInches() {
    this.inches.set(this.centimeters() / 2.54);
  }
}
