import {Component, Input, OnInit} from '@angular/core';
import {faAt, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() packageVersion: string;

  faHeart = faHeart;
  faAt = faAt;

  constructor() {
  }

  ngOnInit() {
  }
}
