import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component';
import { RegisterComponentsComponent } from './components/register.components/register.components.component';
import { ProfileComponentsComponent } from './components/profile.components/profile.components.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpdateComponent } from './components/update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactReactiveComponent,
    RegisterComponentsComponent,
    ProfileComponentsComponent,
    AdminComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
