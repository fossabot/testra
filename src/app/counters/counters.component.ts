import { Component, OnInit, Inject } from '@angular/core';
import { ApiClientService } from '@app/core/api/testra';
import { Counter } from '@app/core/api/testra/models';
import { Logger } from '@app/core';
import { finalize, startWith, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';

const log = new Logger('CountersComponent');

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  isLoading: boolean;
  counters: { type: string; count: number; }[];

  constructor(private testraClientService: ApiClientService) {
  }

  ngOnInit() {
    // this.isLoading = true;
    interval(60000)
      .pipe(
        startWith(0),
        switchMap(() => this.testraClientService.getCounters())
      )
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe(res => this.mapCounterToList(res.body));

    this.testraClientService.getProjects()
      .subscribe(res => console.log(res.body[0]));
  }

  mapCounterToList(counter: Counter) {
    this.counters = [
      { type: 'Projects', count: counter.projectsSize },
      { type: 'Scenarios', count: counter.testScenariosSize },
      { type: 'Testcases', count: counter.testCasesSize },
      { type: 'Executions', count: counter.testExecutionsSize },
      { type: 'Results', count: counter.testResultsSize }
    ];
  }
}
