import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersPageSignalsComponent } from './pages/users-page-signals/users-page-signals.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UsersPageSignalsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
