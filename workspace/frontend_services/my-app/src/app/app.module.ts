import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { KnifeListFormComponent } from './components/list-views/knives/knife-list-form/knife-list-form.component';
import { KnifeListViewComponent } from './components/list-views/knives/knife-list-view/knife-list-view.component';
import { DvdListViewComponent } from './components/list-views/dvds/dvd-list-view/dvd-list-view.component';
import { DvdListFormComponent } from './components/list-views/dvds/dvd-list-form/dvd-list-form.component';
import { RopeListFormComponent } from './components/list-views/ropes/rope-list-form/rope-list-form.component';
import { RopeListViewComponent } from './components/list-views/ropes/rope-list-view/rope-list-view.component';
import { ShoeListItemDetailsComponent } from './components/list-views/shoes/shoe-list-item-details/shoe-list-item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AuthorizationViewComponent,
    UserProfileComponent,
    ShoeListViewComponent,
    ShoeListFormComponent,
    ShoeViewComponent,
    MainViewComponent,
    KnifeListFormComponent,
    KnifeListViewComponent,
    DvdListViewComponent,
    DvdListFormComponent,
    RopeListFormComponent,
    RopeListViewComponent,
    ShoeListItemDetailsComponent
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
