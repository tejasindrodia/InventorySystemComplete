import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ]
  }];

//export const routes: Routes = [
//  {
//    path: '',
//    redirectTo: 'login',
//    pathMatch: 'full',
//  },
//  {
//    path: 'login',
//    component: LoginComponent,
//    data: {
//      title: 'Login Page'
//    }
//  },
//  {
//    path: 'home',
//    component: HomeComponent,
//    data: {
//      title: 'Home Page'
//    }
//  },

//  { path: 'fetch-data', component: FetchDataComponent },
//  {
//    path: 'Dashboard',
//    component: DashboardComponent,
//    data: {
//      title: 'Dashboard Page'
//    },
//    children: [
//      {
//        path: 'home',
//        component: HomeComponent,
//        data: {
//          title: 'Home Page'
//        },
//     },
//     {
//      path: 'Counter',
//       component: CounterComponent,
//      data: {
//        title: 'Counter Incremental Page'
//       },
//      },
//      {
//        path: 'Counter',
//        component: CounterComponent,
//        data: {
//          title: 'Counter Incremental Page'
//        },

//      },
// ]
//  },
//];

@NgModule({
  imports: [RouterModule.forRoot(routes),  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }    
