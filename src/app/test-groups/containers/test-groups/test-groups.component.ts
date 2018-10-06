import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TestGroup} from '@app/core/api/testra/models/test-group';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test-groups',
  templateUrl: './test-groups.component.html',
  styleUrls: ['./test-groups.component.css']
})
export class TestGroupsComponent implements OnInit {

  @Input() groups: TestGroup[];

  @Output() selectedGroup = new EventEmitter<TestGroup>();

  constructor() {
  }

  ngOnInit() {
  }

  selectGroupId(group: TestGroup) {
    this.selectedGroup.emit(group);
  }
}
