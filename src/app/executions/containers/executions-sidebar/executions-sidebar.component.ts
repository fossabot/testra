import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromExecutions from '@app/executions/reducers/executions.reducer';
import {ActionsFactory} from '@app/executions/actions/executions.actions.factory';
import {Execution} from '@app/core/api/testra/models/execution';
import {DeleteExecutionPayload, ExecutionsActionTypes} from '@app/executions/actions/executions.actions';
import {ofType} from '@ngrx/effects';
import {ExecutionsEffects} from '@app/executions/effects/executions.effects';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-executions-sidebar',
  templateUrl: './executions-sidebar.component.html',
  styleUrls: ['./executions-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExecutionsSidebarComponent implements OnInit, OnDestroy {

  @Input() projectId: string;
  @Input() projectName: string;
  @Input() executionIdFromRoute: string;

  isExecutionsLoadSuccess = false;
  executions$: Observable<Execution[]>;
  currentExecution$: Observable<Execution>;

  loadExecutionsSuccessfulSubscription: Subscription;
  loadExecutionsFailSubscription: Subscription;
  executionsSubscription: Subscription;

  constructor(private store: Store<fromExecutions.ExecutionState>,
              private executionEffects: ExecutionsEffects) {
  }

  ngOnInit() {
    this.executions$ = this.store.pipe(select(fromExecutions.allExecutions));
    this.currentExecution$ = this.store.pipe(select(fromExecutions.getCurrentExecution));

    this.store.dispatch(ActionsFactory.newLoadExecutionsAction(this.projectId));

    this.loadExecutionsSuccessfulSubscription = this.executionEffects.loadExecutions$
      .pipe(ofType(ExecutionsActionTypes.LoadExecutionsSuccess))
      .subscribe(() => {
        this.isExecutionsLoadSuccess = true;
        if (this.executionIdFromRoute !== undefined) {
          this.executionsSubscription = this.executions$
            .pipe(
              map(executions => executions.find(execution => execution.id === this.executionIdFromRoute)),
              filter(execution => execution != null)
            )
            .subscribe(() => this.selectExecution(this.executionIdFromRoute));
        }
      });

    this.loadExecutionsFailSubscription = this.executionEffects.loadExecutions$
      .pipe(ofType(ExecutionsActionTypes.LoadExecutionsFail))
      .subscribe(() => {
        this.isExecutionsLoadSuccess = false;
      });
  }

  removeExecution(execution: Execution) {
    const deleteExecPayload: DeleteExecutionPayload = {
      projectId: execution.projectId, executionId: execution.id
    };
    this.store.dispatch(ActionsFactory.newDeleteExecutionAction(deleteExecPayload));
  }

  selectExecution(executionId: string) {
    this.store.dispatch(ActionsFactory.newSelectExecutionAction(executionId));
  }

  ngOnDestroy(): void {
    this.loadExecutionsSuccessfulSubscription.unsubscribe();
    this.loadExecutionsFailSubscription.unsubscribe();
    if (this.executionsSubscription) {
      this.executionsSubscription.unsubscribe();
    }
  }
}
