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
import { RopeListItemDetailsComponent } from './components/list-views/ropes/rope-list-item-details/rope-list-item-details.component';
import { KnifeViewComponent } from './components/list-views/knives/knife-view/knife-view.component';
import { DvdViewComponent } from './components/list-views/dvds/dvd-view/dvd-view.component';
import { RopeViewComponent } from './components/list-views/ropes/rope-view/rope-view.component';
import { DvdListItemDetailsComponent } from './components/list-views/dvds/dvd-list-item-details/dvd-list-item-details.component';
import { KnifeListItemDetailsComponent } from './components/list-views/knives/knife-list-item-details/knife-list-item-details.component';


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
    ShoeListItemDetailsComponent,
    MainViewComponent,
    KnifeListFormComponent,
    KnifeListViewComponent,
    KnifeViewComponent,
    DvdListViewComponent,
    DvdListFormComponent,
    DvdViewComponent,
    RopeListFormComponent,
    RopeListViewComponent,
    RopeViewComponent,
    RopeListItemDetailsComponent,
    DvdListItemDetailsComponent,
    KnifeListItemDetailsComponent
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
