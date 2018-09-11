import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Project} from '@app/core/api/testra/models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input()
  projects: Project[];

  constructor() {
  }

  ngOnInit() {
  }
}
