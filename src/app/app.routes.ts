import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomeComponent from './home/home.component';
import PrivacyComponent from './privacy/privacy.component';
import FeatureComponent from './feature/feature.component';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component:HomeComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path: 'feature', component:FeatureComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }