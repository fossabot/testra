import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromTestGroups from './reducers/test-groups.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TestGroupsEffects} from '@app/test-groups/effects/test-groups.effects';
import {TestGroupService} from '@app/core/api/testra/services/test-group.service';
import {TestGroupsComponent} from './containers/test-groups/test-groups.component';
import {TestGroupsListComponent} from './components/test-groups-list/test-groups-list.component';
import {NbCardModule} from '@nebular/theme';
import {SharedModule} from '@app/shared';
import { NamespaceItemComponent } from './components/namespace-item/namespace-item.component';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    SharedModule,
    StoreModule.forFeature('testGroups', fromTestGroups.reducer),
    EffectsModule.forFeature([TestGroupsEffects])
  ],
  declarations: [TestGroupsComponent, TestGroupsListComponent, NamespaceItemComponent],
  providers: [TestGroupService, TestGroupsEffects],
  exports: [TestGroupsComponent]
})
export class TestGroupsModule {
}
