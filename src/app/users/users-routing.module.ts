import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersPageSignalsComponent } from './pages/users-page-signals/users-page-signals.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: UsersPageComponent },
      { path: 'list-signals', component: UsersPageSignalsComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
