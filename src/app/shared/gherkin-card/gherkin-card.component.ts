import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gherkin-card',
  templateUrl: './gherkin-card.component.html',
  styleUrls: ['./gherkin-card.component.scss']
})
export class GherkinCardComponent implements OnInit {

  @Input() gherkinText: string;

  @Input() isActive: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
