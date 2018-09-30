import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';
import {faExclamationTriangle, faTrash} from '@fortawesome/free-solid-svg-icons';
import {interval, Subject, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-item',
  templateUrl: './execution-item.component.html',
  styleUrls: ['./execution-item.component.scss']
})
export class ExecutionItemComponent implements OnInit, OnDestroy {

  @Input() execution: Execution;

  @Output() removeExecution = new EventEmitter<never>();

  faTrash = faTrash;
  faExclamation = faExclamationTriangle;
  showConfirmIconSubject = new Subject<boolean>();
  showConfirmIcon$ = this.showConfirmIconSubject.asObservable();
  private intervalSubscription$: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.showConfirmIconSubject.next(false);
  }

  remove() {
    this.showConfirmIconSubject.next(true);
    this.intervalSubscription$ = interval(3000)
      .pipe(take(1))
      .subscribe(() => {
        this.showConfirmIconSubject.next(false);
      });
  }

  confirmedRemove() {
    this.removeExecution.emit();
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription$ != null) {
      this.intervalSubscription$.unsubscribe();
    }
  }
}
