import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationViewComponent } from './components/authorization/authorization-view/authorization-view.component';
import { UserProfileComponent } from './components/authorization/user-profile/user-profile.component';


const routes: Routes = [
  {path: '', component: AuthorizationViewComponent},
  {path: 'userProfile', component: UserProfileComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
