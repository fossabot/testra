import {Component, Input, OnInit} from '@angular/core';
import {ProjectCounter} from '../../../core/api/testra/models/project-counter';

@Component({
  selector: 'app-project-counters',
  templateUrl: './project-counters.component.html',
  styleUrls: ['./project-counters.component.scss']
})
export class ProjectCountersComponent implements OnInit {

  @Input() projectCounter: ProjectCounter;

  constructor() {
  }

  ngOnInit() {
  }
}
