import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './principal/chile/chile.component';
import { PeruComponent } from './principal/peru/peru.component';
import { HomeComponent } from './principal/home/home.component';
import { UruguayComponent } from './principal/uruguay/uruguay.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"peru",component:PeruComponent},
  {path:"chile",component:ChileComponent},
  {path:"uruguay",component:UruguayComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
