import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-results-overall-chart',
  templateUrl: './project-results-overall-chart.component.html',
  styleUrls: ['./project-results-overall-chart.component.css']
})
export class ProjectResultsOverallChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
