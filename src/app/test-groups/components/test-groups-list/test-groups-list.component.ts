import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TestGroup} from '@app/core/api/testra/models/test-group';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test-groups-list',
  templateUrl: './test-groups-list.component.html',
  styleUrls: ['./test-groups-list.component.scss']
})
export class TestGroupsListComponent implements OnInit {

  @Input() groups: TestGroup[];

  @Output() group = new EventEmitter<TestGroup>();

  currentGroup: TestGroup;

  constructor() {
  }

  ngOnInit() {
  }

  selectGroup(group: TestGroup) {
    this.group.emit(group);
    this.currentGroup = group;
  }

  getFeature(group: TestGroup) {
    return 'Feature: ' + group.name + '\n' + group.description;
  }

  trackByFn(index: number, group: TestGroup) {
    return group.id;
  }
}
