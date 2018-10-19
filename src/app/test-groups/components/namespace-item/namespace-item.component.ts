import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TestGroup} from '@app/core/api/testra/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-namespace-item',
  templateUrl: './namespace-item.component.html',
  styleUrls: ['./namespace-item.component.scss']
})
export class NamespaceItemComponent {

  @Input() testGroup: TestGroup;
  @Input() isActive: boolean;

  constructor() {
  }
}
