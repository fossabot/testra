import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() name: String;

  @Output() onRemove = new EventEmitter<never>();

  constructor() {
  }

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit();
  }
}
