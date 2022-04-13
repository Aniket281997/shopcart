import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './component/profile/profile.component';
import { ChangePswComponent } from './component/change-psw/change-psw.component';

@NgModule({
  declarations: [ProfileComponent, ChangePswComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule,ReactiveFormsModule],
})
export class ProfileModule {}
