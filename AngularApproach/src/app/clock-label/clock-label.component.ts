/*----- Angular v18 -----*/
import { Component, OnDestroy, signal } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-clock-label',
  standalone: true,
  imports: [],
  template: `
    <div>
      {{ currentTime() }}
    </div>
  `
})
export class ClockLabelComponent implements OnDestroy {

  currentTime = signal<string>("0000-00-00 00:00:00");

  timerId: any;

  constructor() {
    this.startTimer();
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.updateClock();
    }, 250);
  }

  updateClock() {
    let now = new Date();
    this.currentTime.set(format(now, 'yyyy-MM-dd HH:mm:ss.SSS'));
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
