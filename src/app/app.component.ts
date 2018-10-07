import {Component, OnInit} from '@angular/core';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';

import {environment} from '@env/environment';
import {Logger} from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
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
