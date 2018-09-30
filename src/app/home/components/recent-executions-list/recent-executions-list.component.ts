import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';

@Component({
  selector: 'app-recent-executions-list',
  templateUrl: './recent-executions-list.component.html',
  styleUrls: ['./recent-executions-list.component.scss']
})
export class RecentExecutionsListComponent implements OnInit {

  constructor() {
  }

  @Input() title: string;
  @Input() viewAllRouterLink: string;
  @Input() executions: Execution[];

  @Output() navigateTo = new EventEmitter<string>();

  ngOnInit() {
  }

  navigate(projectName: string, executionId: string) {
    this.navigateTo.emit(`/projects/${projectName}/executions/${executionId}`);
  }
}
