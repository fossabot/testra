import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {ShellComponent} from './shell/shell.component';
import {HeaderComponent} from './shell/header/header.component';
import {RouteReusableStrategy} from './route-reusable-strategy';
import {HttpService} from './http/http.service';
import {HttpCacheService} from './http/http-cache.service';
import {ApiPrefixInterceptor} from './http/api-prefix.interceptor';
import {ErrorHandlerInterceptor} from './http/error-handler.interceptor';
import {CacheInterceptor} from './http/cache.interceptor';
import {NbLayoutModule, NbSidebarModule, NbSidebarService} from '@nebular/theme';
import {FooterComponent} from './shell/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    FooterComponent
  ],
  providers: [
    HttpCacheService,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    CacheInterceptor,
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    },
    NbSidebarService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
