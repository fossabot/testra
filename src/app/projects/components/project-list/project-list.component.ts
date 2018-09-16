import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '@app/core/api/testra/models/project';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];
  @Input() isLoading: boolean;
  @Input() isLoadSuccess: boolean;

  @Output() onRemoveProject = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit() {
  }

  removeProject(id: string) {
    this.onRemoveProject.emit(id);
  }
}
