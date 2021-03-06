import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import {Subscription, timer} from 'rxjs';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-auto-refresh',
  templateUrl: './execution-auto-refresh.component.html',
  styleUrls: ['./execution-auto-refresh.component.scss']
})
export class ExecutionAutoRefreshComponent implements OnDestroy {

  faSyncAlt = faSyncAlt;
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
