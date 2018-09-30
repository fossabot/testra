import {Component, OnInit} from '@angular/core';
import env from '../../../environments/.env';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  packageVersion = env.npm_package_version;

  constructor() {
  }

  ngOnInit() {
  }
}
