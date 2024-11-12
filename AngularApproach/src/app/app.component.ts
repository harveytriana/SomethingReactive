import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClockLabelComponent } from './clock-label/clock-label.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClockLabelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'something-reactive';
}
