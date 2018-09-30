import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../core/api/testra/models/project';

@Component({
  selector: 'app-project-content-header',
  templateUrl: './project-content-header.component.html',
  styleUrls: ['./project-content-header.component.scss']
})
export class ProjectContentHeaderComponent implements OnInit {

  @Input() project: Project;

  constructor() {
  }

  ngOnInit() {
  }

}
