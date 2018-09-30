import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActionsFactory} from '@app/projects/actions/projects.actions.factory';
import {Store} from '@ngrx/store';
import * as fromProjects from '@app/projects/reducers/projects.reducer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projectNameFromRoute: string;

  private paramsSubscription: Subscription;

  constructor(private store: Store<fromProjects.ProjectState>, private route: ActivatedRoute) {
    this.paramsSubscription = route.params.subscribe(params => {
      this.projectNameFromRoute = params['projectName'];
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.store.dispatch(ActionsFactory.newSelectProjectAction(null));
    this.paramsSubscription.unsubscribe();
  }
}
