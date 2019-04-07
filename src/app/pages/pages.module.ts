import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImovelModule } from '../modules/imovel/imovel.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent, PagesComponent],
  imports: [
    CommonModule,
    ImovelModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
