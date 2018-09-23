import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromExecutions from '@app/executions/reducers/executions.reducer';
import {ActionsFactory} from '@app/executions/actions/executions.actions.factory';
import {Execution} from '@app/core/api/testra/models/execution';
import {DeleteExecutionPayload} from '@app/executions/actions/executions.actions';

@Component({
  selector: 'app-executions',
  templateUrl: './executions.component.html',
  styleUrls: ['./executions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExecutionsComponent implements OnInit {
  executions$: Observable<Execution[]>;

  constructor(private store: Store<fromExecutions.State>) {
    this.executions$ = this.store.pipe(select(fromExecutions.allExecutions));
  }

  ngOnInit() {
    this.store.dispatch(ActionsFactory.newLoadExecutionsAction());
  }

  removeExecution(execution: Execution) {
    console.log(execution);
    const deleteExecPayload: DeleteExecutionPayload = {
      projectId: execution.projectId, executionId: execution.id
    };
    this.store.dispatch(ActionsFactory.newDeleteExecutionAction(deleteExecPayload));
  }
}
