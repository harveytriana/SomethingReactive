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

  currentTime = signal<string>("...");

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
    // this.currentTime.set(new Date().toISOString().replace("T", " ").slice(0, 19));
    let now = new Date();
    this.currentTime.set(format(now, 'yyyy-MM-dd HH:mm:ss.SSS'));
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}