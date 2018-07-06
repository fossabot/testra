import { Component, OnInit, Inject } from '@angular/core';
import { ApiClientService } from '@app/core/api/testra';
import { Counter } from '@app/core/api/testra/models';
import { Logger } from '@app/core';
import { finalize, startWith, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { CounterService, ProjectService } from '@app/core/api/testra/services';

const log = new Logger('CountersComponent');

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  isLoading: boolean;
  counters: { type: string; count: number; }[];

  constructor(private counterService: CounterService,
      private projectService: ProjectService) {
  }

  ngOnInit() {
    // this.isLoading = true;
    interval(60000)
      .pipe(
        startWith(0),
        switchMap(() => this.counterService.getCounters())
      )
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe(res => this.mapCounterToList(res));

    this.projectService.getProjects()
      .subscribe(res => console.log(res));
  }

  mapCounterToList(counter: Counter) {
    this.counters = [
      { type: 'Projects', count: counter.projectsCount },
      { type: 'Scenarios', count: counter.testScenariosCount },
      { type: 'Testcases', count: counter.testCasesCount },
      { type: 'Executions', count: counter.testExecutionsCount },
      { type: 'Results', count: counter.testResultsCount }
    ];
  }
}
