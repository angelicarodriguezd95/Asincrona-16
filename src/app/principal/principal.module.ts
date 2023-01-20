import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { PeruComponent } from './peru/peru.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { ChileComponent } from './chile/chile.component';
import { TituloComponent } from './titulo/titulo.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MenuComponent,
    PeruComponent,
    UruguayComponent,
    ChileComponent,
    TituloComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent,
    PeruComponent,
    UruguayComponent,
    ChileComponent,
    TituloComponent,
    HomeComponent
  ]
})
export class PrincipalModule { }
