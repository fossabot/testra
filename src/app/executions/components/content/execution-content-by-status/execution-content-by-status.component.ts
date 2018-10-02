import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-execution-content-by-status',
  templateUrl: './execution-content-by-status.component.html',
  styleUrls: ['./execution-content-by-status.component.css']
})
export class ExecutionContentByStatusComponent implements OnInit {

  showGroupsContent = true;
  showTestsContent = true;
  showTestContent = true;

  constructor() {
  }

  ngOnInit() {
  }

  log(eventName: string, event: any) {
    console.log(eventName + event);
  }
}
