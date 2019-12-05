import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RopeViewComponent } from './rope-view/rope-view.component';
import { KnifeViewComponent } from './knife-view/knife-view.component';
import { BootsViewComponent } from './boots-view/boots-view.component';
import { DvdViewComponent } from './dvd-view/dvd-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RopeViewComponent,
    KnifeViewComponent,
    BootsViewComponent,
    DvdViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
