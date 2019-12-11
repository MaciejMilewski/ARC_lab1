import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationViewComponent } from './components/authorization/authorization-view/authorization-view.component';
import { UserProfileComponent } from './components/authorization/user-profile/user-profile.component';
import { MainViewComponent } from './components/list-views/main-view/main-view.component';
import { ShoeViewComponent } from './components/list-views/shoes/shoe-view/shoe-view.component';
import { DvdViewComponent } from './components/list-views/dvds/dvd-view/dvd-view.component';
import { DvdListItemDetailsComponent } from './components/list-views/dvds/dvd-list-item-details/dvd-list-item-details.component';

const routes: Routes = [
  {path: '', component: AuthorizationViewComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'mainView', component: MainViewComponent},
  {path: 'shoes', component: ShoeViewComponent},
  {path: 'dvds', component: DvdViewComponent},
  {path: 'dvds/:id', component: DvdListItemDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
