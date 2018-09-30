import {Component, OnInit} from '@angular/core';
import {ProjectService} from '@app/core/api/testra/services/project.service';
import {ExecutionService} from '@app/core/api/testra/services/execution.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topProjects$: Observable<any>;
  recentExecutions$: Observable<any>;

  constructor(private projectService: ProjectService,
              private executionService: ExecutionService,
              private router: Router,
              private route: ActivatedRoute) {
    this.topProjects$ = this.projectService.topProjects(5)
      .pipe(
        map(pecList => pecList
          .sort((a, b) => b.noOfExecutions - a.noOfExecutions)
          .map(pec => [pec.projectName, pec.noOfExecutions + ' Executions'])
        )
      );

    this.recentExecutions$ = this.executionService.recentExecutions(5)
      .pipe(
        map(reList => reList
          .sort((a, b) => b.startTime - a.startTime)
        ));
  }

  ngOnInit() {
  }

  navigateToProject(path: string) {
    this.router.navigate([`../${path}`], { relativeTo: this.route });
  }

  navigateToExecution(path: string) {
    this.router.navigate([`../${path}`], { relativeTo: this.route });
  }
}
