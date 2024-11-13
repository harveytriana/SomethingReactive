/*---------- Angular v18 ----------*/
import { Component } from '@angular/core';
import { ClockLabelComponent } from './clock-label/clock-label.component'
import { ConvertLengthComponent } from './convert-length/convert-length.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockLabelComponent, ConvertLengthComponent],
  template: `
    <h1>Something Reactive</h1>
    <hr>
    <app-clock-label />
    <hr />
    <app-convert-length />
  `
})
export class AppComponent {
  title = 'something-reactive';
}
