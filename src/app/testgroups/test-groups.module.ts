import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTestGroups from './reducers/test-groups.reducer';
import { EffectsModule } from '@ngrx/effects';
import {TestGroupsEffects} from '@app/testgroups/effects/test-groups.effects';
import {TestGroupService} from '@app/core/api/testra/services/test-group.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('TestGroups', fromTestGroups.reducer),
    EffectsModule.forFeature([TestGroupsEffects])
  ],
  declarations: [],
  providers: [TestGroupService, TestGroupsEffects]
})
export class TestGroupsModule { }
