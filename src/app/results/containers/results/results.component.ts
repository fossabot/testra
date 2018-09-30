import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromResults from '@app/results/reducers/results.reducer';
import {ActionsFactory} from '@app/results/actions/results.actions.factory';
import {ResultsEffects} from '@app/results/effects/results.effects';
import {Observable} from 'rxjs';
import {TestResult} from '@app/core/api/testra/models/test-result';
import {allResults} from '@app/results/reducers/results.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  @Input() projectId: string;
  @Input() executionIdFromRoute: string;
  @Input() status: string;

  results$: Observable<TestResult[]>;

  constructor(private store: Store<fromResults.ResultState>,
              private resultEffects: ResultsEffects) {
  }
  ngOnInit() {
    this.results$ = this.store.pipe(select(allResults));

    this.store.dispatch(ActionsFactory.newLoadResultsAction(
      {projectId: this.projectId, executionId: this.executionIdFromRoute, status: this.status}
    ));
  }
}
