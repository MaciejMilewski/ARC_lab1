import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationViewComponent } from './components/authorization/authorization-view/authorization-view.component';
import { UserProfileComponent } from './components/authorization/user-profile/user-profile.component';
import { MainViewComponent } from './components/list-views/main-view/main-view.component';

import { ShoeViewComponent } from './components/list-views/shoes/shoe-view/shoe-view.component';
import { ShoeListItemDetailsComponent } from './components/list-views/shoes/shoe-list-item-details/shoe-list-item-details.component';
import { KnifeViewComponent } from './components/list-views/knives/knife-view/knife-view.component';
import { RopeViewComponent } from './components/list-views/ropes/rope-view/rope-view.component';
import { DvdViewComponent } from './components/list-views/dvds/dvd-view/dvd-view.component';
import { KnifeListItemDetailsComponent } from './components/list-views/knives/knife-list-item-details/knife-list-item-details.component';
import { RopeListItemDetailsComponent } from './components/list-views/ropes/rope-list-item-details/rope-list-item-details.component';
import { DvdListItemDetailsComponent } from './components/list-views/dvds/dvd-list-item-details/dvd-list-item-details.component';


const routes: Routes = [
  {path: '', component: AuthorizationViewComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'mainView', component: MainViewComponent},
  {path: 'shoes', component: ShoeViewComponent},
  {path: 'knives', component: KnifeViewComponent},
  {path: 'ropes', component: RopeViewComponent},
  {path: 'dvds', component: DvdViewComponent},
  {path: 'shoes/:id', component: ShoeListItemDetailsComponent},
  {path: 'knives/:id', component: KnifeListItemDetailsComponent},
  {path: 'ropes/:id', component: RopeListItemDetailsComponent},
  {path: 'dvds/:id', component: DvdListItemDetailsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
