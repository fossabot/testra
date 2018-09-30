import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-projects-list',
  templateUrl: './top-projects-.component.html',
  styleUrls: ['./top-projects-list.component.scss']
})
export class TopProjectsListComponent implements OnInit {

  @Input() title: string;
  @Input() viewAllRouterLink: string;
  @Input() list: [string, string][];

  @Output() navigateTo = new EventEmitter<string>();

  faChevronCircleRight = faChevronCircleRight;

  constructor() {
  }

  ngOnInit() {
  }

  navigate(path: string) {
    this.navigateTo.emit(`/projects/${path}`);
  }
}
