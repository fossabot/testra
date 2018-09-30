import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {Subscription, timer} from 'rxjs';


@Component({
  selector: 'app-execution-auto-refresh',
  templateUrl: './execution-auto-refresh.component.html',
  styleUrls: ['./execution-auto-refresh.component.scss']
})
export class ExecutionAutoRefreshComponent implements OnDestroy {

  faClock = faClock;
  on = false;

  @Output() autoRefreshToggle = new EventEmitter<void>();

  timerSubscription: Subscription;

  constructor() {
  }

  toggleAutoRefresh(on: boolean) {
    this.on = on;
    if (on) {
      this.startAutoRefreshTimer();
    } else {
      this.stopAutoRefreshTimer();
    }
  }

  startAutoRefreshTimer() {
    this.timerSubscription = timer(5000, 30000)
      .subscribe(() => this.autoRefreshToggle.emit());
  }

  stopAutoRefreshTimer() {
    this.timerSubscription.unsubscribe();
  }

  ngOnDestroy() {
    if (this.autoRefreshToggle) {
      this.autoRefreshToggle.unsubscribe();
    }
  }
}
