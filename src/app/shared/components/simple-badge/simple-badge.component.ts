import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-simple-badge',
  templateUrl: './simple-badge.component.html',
  styleUrls: ['./simple-badge.component.scss']
})
export class SimpleBadgeComponent {

  @Input() text: string;
  @Input() color: string;

  constructor() {
  }
}
