import { Component } from '@angular/core';
import { ClockLabelComponent } from './clock-label/clock-label.component'
import { ConvertLengthComponent } from './convert-length/convert-length.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockLabelComponent, ConvertLengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'something-reactive';
}
