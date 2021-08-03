import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'people',
        component: PeopleListComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      { 
        path: '404', 
        component: NotFoundComponent 
      },
      { path: '**', redirectTo: '/404' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
