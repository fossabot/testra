import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-item',
  templateUrl: './execution-item.component.html',
  styleUrls: ['./execution-item.component.css']
})
export class ExecutionItemComponent implements OnInit {

  @Input() execution: Execution;

  @Output() onRemove = new EventEmitter<never>();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit();
  }

}


