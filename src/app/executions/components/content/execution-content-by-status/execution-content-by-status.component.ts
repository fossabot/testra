import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TestGroup} from '@app/core/api/testra/models/test-group';
import {Observable, Subject} from 'rxjs';
import {Execution} from '@app/core/api/testra/models/execution';
import {select, Store} from '@ngrx/store';
import * as fromTestGroups from '@app/test-groups/reducers/test-groups.reducer';
import {allTestGroups, selectGroupsLoading} from '@app/test-groups/reducers/test-groups.reducer';
import * as fromExecutions from '@app/executions/reducers/executions.reducer';
import {getCurrentExecution} from '@app/executions/reducers/executions.reducer';
import * as fromResults from '@app/results/reducers/results.reducer';
import {allResults, selectResultsLoading} from '@app/results/reducers/results.reducer';
import {ResultsEffects} from '@app/results/effects/results.effects';
import {TestGroupsEffects} from '@app/test-groups/effects/test-groups.effects';
import {map, takeUntil} from 'rxjs/operators';
import {LoadResultsPayload, ResultsActionTypes} from '@app/results/actions/results.actions';
import {ActionsFactory as TestGroupsActionFactory} from '@app/test-groups/actions/test-groups.actions.factory';
import {ActionsFactory as ResultsActionFactory} from '@app/results/actions/results.actions.factory';
import {ofType} from '@ngrx/effects';
import {TestGroupsActionTypes} from '@app/test-groups/actions/test-groups.actions';
import {EnrichedTestResult} from '@app/core/api/testra/models/enriched-test-result';
import {selectGroupsCount} from '@app/test-groups/reducers/test-groups.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-content-by-status',
  templateUrl: './execution-content-by-status.component.html',
  styleUrls: ['./execution-content-by-status.component.scss']
})
export class ExecutionContentByStatusComponent implements OnInit, OnDestroy {

  showGroupsContent = true;
  showResultsContent = false;
  showResultContent = false;

  selectedGroup: TestGroup;
  selectedResult: EnrichedTestResult;

  loading$: Observable<boolean>;
  groupsCount$: Observable<number>;

  @Input() resultStatus: string;

  @Output() hideSideBar = new EventEmitter<boolean>();

  private currentExecution$: Observable<Execution>;
  private testGroups$: Observable<TestGroup[]>;
  private destroyed$ = new Subject<void>();

  groups$ = new Subject<TestGroup[]>();
  results$: Observable<EnrichedTestResult[]>;

  selectedGroupResults: EnrichedTestResult[];

  constructor(private testGroupsStore: Store<fromTestGroups.TestGroupState>,
              private executionsStore: Store<fromExecutions.ExecutionState>,
              private resultsStore: Store<fromResults.ResultState>,
              private resultsEffects: ResultsEffects,
              private testGroupEffects: TestGroupsEffects) {
  }

  ngOnInit() {
    this.loading$ = this.resultsStore.pipe(select(selectResultsLoading));
    this.currentExecution$ = this.executionsStore.pipe(select(getCurrentExecution));
    this.results$ = this.resultsStore.pipe(select(allResults));
    this.testGroups$ = this.testGroupsStore.pipe(select(allTestGroups));
    this.groupsCount$ = this.testGroupsStore.pipe(select(selectGroupsCount));

    this.currentExecution$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((exec: Execution) => {
          const loadResultsPayload: LoadResultsPayload = {
            projectId: exec.projectId,
            executionId: exec.id,
            status: this.resultStatus
          };
          this.testGroupsStore.dispatch(TestGroupsActionFactory.newLoadTestGroupsAction(exec.projectId, exec.id));
          this.resultsStore.dispatch(ResultsActionFactory.newLoadResultsAction(loadResultsPayload));
        }
      );

    this.testGroupEffects.loadTestGroups$
      .pipe(
        takeUntil(this.destroyed$),
        ofType(TestGroupsActionTypes.LoadTestGroupsSuccess)
      )
      .subscribe(() => {
        this.testGroups$
          .pipe(takeUntil(this.destroyed$))
          .subscribe((testGroups: TestGroup[]) => {
              this.resultsEffects.loadResults$
                .pipe(takeUntil(this.destroyed$),
                  ofType(ResultsActionTypes.LoadResultsSuccess))
                .subscribe(() =>
                  this.results$
                    .pipe(
                      takeUntil(this.destroyed$),
                      map(results => results.map(result => result.groupId)),
                      map(gIds => Array.from((new Set(gIds)).values())), // distinct values
                      map(gIds => gIds.map(gId => testGroups.find(tg => tg.id === gId)))
                    )
                    .subscribe(filteredTestGroups => {
                      this.groups$.next(filteredTestGroups);
                    })
                );
            }
          );
      });

    this.testGroupEffects.loadTestGroups$
      .pipe(ofType(TestGroupsActionTypes.LoadTestGroupsFail))
      .subscribe();
  }

  log(eventName: string, event: any) {
    console.log(eventName + event);
  }

  selectResult(result: EnrichedTestResult) {
    this.showResultContent = true;
    this.selectedResult = result;
  }

  selectGroup(group: TestGroup) {
    this.selectedGroup = group;
    this.showResultContent = false;
    this.showResultsContent = true;
    this.results$
      .pipe(
        takeUntil(this.destroyed$),
        map(results => results.filter(result => result.groupId === group.id).sort())
      ).subscribe(resultsByGroup => this.selectedGroupResults = resultsByGroup);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.groups$.complete();
  }
}
