import {Component, OnInit} from '@angular/core';

import {environment} from '@env/environment';
import {Logger} from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
      // Disables all console log statements for prod
      window.console.log(() => {
      });
    }
  }
}
