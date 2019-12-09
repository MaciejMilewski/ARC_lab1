import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RopeViewComponent } from './rope-view/rope-view.component';
import { KnifeViewComponent } from './knife-view/knife-view.component';
import { DvdViewComponent } from './dvd-view/dvd-view.component';
import { LoginComponent } from './components/authorization/login/login.component';
import { RegistrationComponent } from './components/authorization/registration/registration.component';
import { AuthorizationViewComponent } from './components/authorization/authorization-view/authorization-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/authorization/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RopeViewComponent,
    KnifeViewComponent,
    DvdViewComponent,
    LoginComponent,
    RegistrationComponent,
    AuthorizationViewComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
