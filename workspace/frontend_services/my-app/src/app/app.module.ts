import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
import { ShoeListViewComponent } from './components/list-views/shoes/shoe-list-view/shoe-list-view.component';
import { ShoeListFormComponent } from './components/list-views/shoes/shoe-list-form/shoe-list-form.component';
import { ShoeViewComponent } from './components/list-views/shoes/shoe-view/shoe-view.component';
import { MainViewComponent } from './components/list-views/main-view/main-view.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RopeViewComponent,
    KnifeViewComponent,
    DvdViewComponent,
    LoginComponent,
    RegistrationComponent,
    AuthorizationViewComponent,
    UserProfileComponent,
    ShoeListViewComponent,
    ShoeListFormComponent,
    ShoeViewComponent,
    MainViewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
