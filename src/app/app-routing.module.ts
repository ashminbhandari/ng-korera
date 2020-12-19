import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './components/resource/resource.component';
import {AuthComponent} from './components/auth/auth.component';

const routes: Routes = [
  {
    path: 'resources',
    component: ResourceComponent,
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
