import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '@app/core/api/testra/models/project';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];
  @Input() isLoading: boolean;
  @Input() isLoadSuccess: boolean;
  @Input() currentProject: Project;

  @Output() removeProject$ = new EventEmitter<string>();
  @Output() selectedProjectName$ = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  removeProject(id: string) {
    this.removeProject$.emit(id);
  }

  selectListItem(projectName: string) {
    this.selectedProjectName$.emit(projectName);
    window.history.replaceState({}, '', `/projects/${projectName}`);
  }
}
