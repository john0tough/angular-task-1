import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './user-info/user-info.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'infouser/:login', component: UserInfoComponent },
  { path: '', redirectTo: 'users',  pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <- only for debug popuses
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
