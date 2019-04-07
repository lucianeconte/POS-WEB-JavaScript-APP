import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImoveisRoutingModule } from './imoveis-routing.module';
import { ImoveisListComponent } from './imoveis-list/imoveis-list.component';
import { ImoveisCreateComponent } from './imoveis-create/imoveis-create.component';
import { ImoviesUpdateComponent } from './imovies-update/imovies-update.component';
import { ImovelModule } from 'src/app/modules/imovel/imovel.module';

@NgModule({
  declarations: [ImoveisListComponent, ImoveisCreateComponent, ImoviesUpdateComponent],
  imports: [
    CommonModule,
    ImovelModule,
    ImoveisRoutingModule
  ]
})
export class ImoveisModule { }
