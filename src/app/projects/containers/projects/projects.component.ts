import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromProjects from '@app/projects/reducers/projects.reducer';
import {Observable} from 'rxjs';
import {ActionsFactory} from '@app/projects/actions/projects.actions.factory';
import {Project} from '@app/core/api/testra/models/project';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private store: Store<fromProjects.State>) {
    this.projects$ = this.store.pipe(select('projects'))
      .pipe(map((projectsState: fromProjects.State) => projectsState.projects));
  }

  ngOnInit() {
    this.store.dispatch(ActionsFactory.newLoadProjectsAction());
  }
}
