import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromProjects from '@app/projects/reducers/projects.reducer';
import {getCurrentProject} from '@app/projects/reducers/projects.reducer';
import {Project} from '@app/core/api/testra/models/project';
import {Observable, Subject, Subscription} from 'rxjs';
import {ProjectCounter} from '@app/core/api/testra/models/project-counter';
import {ProjectService} from '@app/core/api/testra/services/project.service';
import {filter, find} from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss']
})
export class ProjectsContentComponent implements OnInit, OnDestroy {

  currentProject$ = new Observable<Project>();

  projectCounter$ = new Subject<ProjectCounter>();

  private projectCounterSubscription: Subscription;

  constructor(private store: Store<fromProjects.ProjectState>, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.currentProject$ = this.store.pipe(select(getCurrentProject));

    this.projectCounterSubscription = this.currentProject$
      .pipe(filter(project => project != null))
      .subscribe(project =>
        this.projectService.getProjectCounters(project.id)
          .subscribe(pc => this.projectCounter$.next(pc))
      );
  }

  ngOnDestroy() {
    this.projectCounterSubscription.unsubscribe();
  }
}
