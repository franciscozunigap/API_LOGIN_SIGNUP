import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component';
import { RegisterComponentsComponent } from './components/register.components/register.components.component';
import { ProfileComponentsComponent } from './components/profile.components/profile.components.component';


const routes: Routes = [
  
  {
    path: 'login',
    component:  ContactReactiveComponent,
    pathMatch: "full"
  },
  {
    path: 'register',
    component: RegisterComponentsComponent,
    pathMatch: "full"

  },
  {
    path: 'profile',
    component: ProfileComponentsComponent,
    pathMatch: "full"

  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

