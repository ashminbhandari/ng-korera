import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './components/resource/resource.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthGuardService} from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'resources',
    component: ResourceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
