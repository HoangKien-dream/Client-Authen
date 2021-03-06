import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {ConsentScreenComponent} from './components/consent-screen/consent-screen.component'

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"auth",component:ConsentScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
