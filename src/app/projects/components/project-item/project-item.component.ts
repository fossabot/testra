import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {faExclamationTriangle, faTrash} from '@fortawesome/free-solid-svg-icons';
import {interval, Subject, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit, OnDestroy {

  faTrash = faTrash;
  faExclamation = faExclamationTriangle;
  showConfirmIconSubject = new Subject<boolean>();
  showConfirmIcon$ = this.showConfirmIconSubject.asObservable();
  private intervalSubscription$: Subscription;

  @Input() name: string;
  @Input() id: string;

  @Output() remove$ = new EventEmitter<never>();

  constructor() {
  }

  ngOnInit() {
    this.showConfirmIconSubject.next(false);
  }

  confirmedRemove() {
    this.remove$.emit();
  }

  remove() {
    this.showConfirmIconSubject.next(true);
    this.intervalSubscription$ = interval(3000)
      .pipe(take(1))
      .subscribe(() => {
        this.showConfirmIconSubject.next(false);
      });
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription$ != null) {
      this.intervalSubscription$.unsubscribe();
    }
  }
}
